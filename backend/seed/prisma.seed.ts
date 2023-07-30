import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


async function main(): Promise<void> {
    const isAdmin = await prisma.emploeeEntity.findUnique({where: { surname: 'Admin'}});
    if(isAdmin) return;
    await prisma.emploeeEntity.create({
        data: {
            name: 'Admin',
            surname: 'Admin',
            patronymic: 'Admin',
            password: '$2a$04$/hS6litXtkeCPt5gyaCUsOIY8qcqWnFY4LuKG23wkTE0bX9NW8bu2',
            dateBirthday: new Date(),
            jobTitle: 'HR_MANAGER'
        }
    });
};
main().then(async () => {
    console.log('Seed start');
    await prisma.$disconnect();
})
