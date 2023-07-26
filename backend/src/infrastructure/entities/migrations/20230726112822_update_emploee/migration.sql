/*
  Warnings:

  - Added the required column `dateBirthday` to the `EmploeeEntity` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EmploeeEntity" ADD COLUMN     "dateBirthday" TIMESTAMP(3) NOT NULL;
