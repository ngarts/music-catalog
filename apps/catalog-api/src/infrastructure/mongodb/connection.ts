import { MongoClient, type Db } from "mongodb";

export interface MongoConnection {
  client: MongoClient;
  database: Db;
}

export async function connectToMongoDB(
  uri: string,
  databaseName: string
): Promise<MongoConnection> {
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const database = client.db(databaseName);

    await database.command({
      ping: 1
    });

    return {
      client,
      database
    };
  } catch (error) {
    await client.close();
    throw error;
  }
}