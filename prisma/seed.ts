import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const userData: () => Promise<
  [
    {
      password: string;
      name: string;
      posts: {
        create: { published: boolean; title: string; content: string }[];
      };
      email: string;
    },
  ]
> = async () => [
  {
    name: 'Daniel',
    email: 'daniel@sum.consulting',
    password: await bcrypt.hash('password', await bcrypt.genSalt()),
    posts: {
      create: [
        {
          title: 'Uptoolkit',
          content: 'Up toolkit is awesome',
          published: true,
        },
      ],
    },
  },
];

async function main() {
  console.log(`Start seeding ...`);
  const data = await userData();
  for (const u of data) {
    const user = await prisma.user.create({
      data: u,
    });
    console.log(`Created user with id: ${user.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
