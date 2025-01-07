import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // Await the hash function to get the hashed password as a string
  const hashedPassword = await hash("kilatravel2025", 12);

  await prisma.user.upsert({
    where: { email: "Kila.travel2018@gmail.com" },
    update: {},
    create: {
      name:"giorgi",
      email: "Kila.travel2018@gmail.com",
      password: hashedPassword, 
    },
  });

  console.log("User upserted successfully.");
}

main()
  .catch((e) => {
    console.error("Error during seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });



 