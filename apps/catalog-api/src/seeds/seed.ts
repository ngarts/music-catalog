import { loadEnvironment } from "../config/environment.js";
import { initialSingles } from "../domain/data/initial-singles.js";
import type { Single } from "../domain/entities/single.js";
import { connectToMongoDB } from "../infrastructure/mongodb/connection.js";

async function seed(): Promise<void> {
    const environment = loadEnvironment();
    const force = process.argv.includes("--force");

    const { client, database } = await connectToMongoDB(environment.mongodbUri, environment.mongodbDatabase);

    try {
        const singlesCollection = database.collection<Single>("singles");
        const existingCount = await singlesCollection.countDocuments();

        if (existingCount > 0 && !force) {
            console.log( `Seed skipped: singles collection already contains ${existingCount} document(s).`);
            console.log("Run with --force to replace existing data.")
            return;
        }

        if (force) {
            const deleteResult = await singlesCollection.deleteMany({});

            console.log(`Removed ${deleteResult.deletedCount} existing single(s).`);
        }

        if (initialSingles.length === 0) {
            console.log("No initial singles to insert.");
            return;
        }

        const insertResult = await singlesCollection.insertMany(initialSingles);

        console.log(`Inserted ${insertResult.insertedCount} single(s) into '${environment.mongodbDatabase}.singles'.`);
    } finally {
        await client.close();
    }
}

void seed().catch((error) => {
    console.error("Failed to seed MongoDB", error);
    process.exitCode = 1;
});
