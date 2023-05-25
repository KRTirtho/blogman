import { PrismaClient } from "@prisma/client";

export class SeedOperation {
  client: PrismaClient;

  constructor(client: PrismaClient) {
    this.client = client;
  }

  run(): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
