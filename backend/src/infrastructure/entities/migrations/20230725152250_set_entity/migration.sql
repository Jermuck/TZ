-- CreateEnum
CREATE TYPE "JonTitle" AS ENUM ('HR_MANAGER', 'EMPLOEE');

-- CreateTable
CREATE TABLE "EmploeeEntity" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "patronymic" TEXT NOT NULL,
    "jobTitle" "JonTitle" NOT NULL,
    "salary" INTEGER,
    "password" TEXT,
    "dateStartWork" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EmploeeEntity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TokenEntity" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "emploeeId" TEXT,

    CONSTRAINT "TokenEntity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EmploeeEntity_patronymic_key" ON "EmploeeEntity"("patronymic");

-- CreateIndex
CREATE UNIQUE INDEX "TokenEntity_emploeeId_key" ON "TokenEntity"("emploeeId");

-- AddForeignKey
ALTER TABLE "TokenEntity" ADD CONSTRAINT "TokenEntity_emploeeId_fkey" FOREIGN KEY ("emploeeId") REFERENCES "EmploeeEntity"("id") ON DELETE SET NULL ON UPDATE CASCADE;
