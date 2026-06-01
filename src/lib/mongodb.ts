import { MongoClient, type Collection } from "mongodb";

import { getMongoConfig } from "./env";
import type { LeadDocument } from "./enquiry-schema";

const globalForMongo = globalThis as typeof globalThis & {
  _mongoClient?: MongoClient;
};

async function getClient(): Promise<MongoClient> {
  if (globalForMongo._mongoClient) {
    return globalForMongo._mongoClient;
  }

  const { uri } = getMongoConfig();
  const client = new MongoClient(uri);
  await client.connect();
  globalForMongo._mongoClient = client;
  return client;
}

export async function getLeadsCollection(): Promise<Collection<LeadDocument>> {
  const { dbName } = getMongoConfig();
  const client = await getClient();
  return client.db(dbName).collection<LeadDocument>("leads");
}

export async function insertLead(
  lead: Omit<LeadDocument, "status" | "createdAt">,
): Promise<string> {
  const collection = await getLeadsCollection();
  const result = await collection.insertOne({
    ...lead,
    status: "new",
    createdAt: new Date(),
  });
  return result.insertedId.toString();
}
