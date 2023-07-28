/*
  Warnings:

  - You are about to drop the `CreateEmploee` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DeleteEmploee` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "CreateEmploee";

-- DropTable
DROP TABLE "DeleteEmploee";

-- CreateTable
CREATE TABLE "StatisticEmploee" (
    "id" TEXT NOT NULL,
    "emploeeId" TEXT NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StatisticEmploee_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "StatisticEmploee_emploeeId_key" ON "StatisticEmploee"("emploeeId");
