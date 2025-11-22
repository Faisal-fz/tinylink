// db/seed.ts
import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import sampleData from "./sample-data";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Clear existing data
  await prisma.link.deleteMany();

  // Insert sample rows
  await prisma.link.createMany({
    data: sampleData.sampleLinks,
  });

  console.log("✅ Database seeded with sample data.");
}

main()
  .catch((error) => {
    console.error("❌ Seed failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
