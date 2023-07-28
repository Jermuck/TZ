/*
  Warnings:

  - Added the required column `type` to the `StatisticEmploee` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "StatusEmploee" AS ENUM ('DELETE', 'WORK');

-- AlterTable
ALTER TABLE "StatisticEmploee" ADD COLUMN     "type" "StatusEmploee" NOT NULL;
