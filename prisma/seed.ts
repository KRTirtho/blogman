import { TriggerSeeds } from "./seeds/triggers";
import { SeedOperation } from "@/utils/dbms/seed-operation";
import { PrismaClient } from "@prisma/client";
import { SingleBar, Presets } from "cli-progress";

export const Seeds: (typeof SeedOperation)[] = [...TriggerSeeds];

const prisma = new PrismaClient();
async function seed() {
  const seedProgressBar = new SingleBar(
    {
      format:
        "Seeding DB |" +
        "{bar}" +
        "| {percentage}% | {value}/{total} {active_seed}",
    },
    Presets.shades_classic
  );
  const seedOperations = Seeds.map((Seed) => new Seed(prisma));

  for await (const seedOperation of seedOperations) {
    try {
      await seedOperation.run();
      seedProgressBar.increment(1, {
        active_seed: seedOperation.constructor.name,
      });
    } catch (error) {
      console.error(`\n\n[ERROR] Error seeding ${seed.name}`);
      throw error;
    }
  }
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
