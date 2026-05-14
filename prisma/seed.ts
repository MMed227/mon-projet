import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const categories = ['Plomberie', 'Électricité', 'Menuiserie'];
  for (const name of categories) {
    await prisma.category.upsert({ where: { name }, update: {}, create: { name } });
  }

  const regions = ['Niamey', 'Dosso', 'Maradi'];
  for (const name of regions) {
    await prisma.region.upsert({ where: { name }, update: {}, create: { name } });
  }

  const adminEmail = 'admin@prestanet.test';
  await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      email: adminEmail,
      password: 'changeme',
      role: 'admin',
      firstName: 'Admin',
      lastName: 'PrestaNet',
    },
  });

  console.log('Seed completed');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
