import { buildApp } from "./app.js";
import { loadEnvironment } from "./config/environment.js";
import { buildContainer } from "./container/index.js";
import { connectToMongoDB } from "./infrastructure/mongodb/connection.js";

async function start(): Promise<void> {
  const environment = loadEnvironment();

  const mongoConnection = await connectToMongoDB(
    environment.mongodbUri,
    environment.mongodbDatabase
  );

  const container = buildContainer(mongoConnection.database);
  const app = buildApp(container, environment);

  app.addHook("onClose", async () => {
    await mongoConnection.client.close();
  });

  try {
    await app.listen({
      host: environment.host,
      port: environment.port
    });

    app.log.info(
      {
        database: environment.mongodbDatabase
      },
      "Connected to MongoDB"
    );
  } catch (error) {
    app.log.error(error);
    await app.close();
    process.exitCode = 1;
  }
}

void start().catch((error: unknown) => {
  console.error("Failed to start catalog-api", error);
  process.exitCode = 1;
});