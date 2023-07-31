import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


async function main(): Promise<void> {
    const isAdmin = await prisma.emploeeEntity.findFirst({
        where: {
            surname: 'Admin', patronymic: 'Admin', name: 'Admin'
        }
    });
    if (!isAdmin) {
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
    }
    const isTestEmploee = await prisma.emploeeEntity.findFirst({
        where: {
            surname: 'Test', patronymic: 'Test', name: 'Test'
        }
    });
    if (!isTestEmploee) {
        const newTestEmploee = await prisma.emploeeEntity.create({
            data: {
                name: 'Test',
                surname: 'Test',
                patronymic: 'Test',
                password: '$2a$04$/hS6litXtkeCPt5gyaCUsOIY8qcqWnFY4LuKG23wkTE0bX9NW8bu2',
                dateStartWork: new Date('2023-05-30T16:00:12.992Z'),
                dateBirthday: new Date(),
                jobTitle: 'EMPLOEE',
                salary: 50000,
            }
        });
        const statistic = await prisma.statisticEmploee.findFirst({
            where: {
                emploeeId: newTestEmploee.id,
                type: 'WORK'
            }
        });
        if(statistic) return;
        await prisma.statisticEmploee.create({
            data: {
                emploeeId: newTestEmploee.id,
                type: 'WORK',
                time: newTestEmploee.dateStartWork
            }
        })
    };
};
main().then(async () => {
    console.log('Seed start');
    await prisma.$disconnect();
})
