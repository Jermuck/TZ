/*
  Warnings:

  - Made the column `link` on table `EmploeeEntity` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "EmploeeEntity_link_key";

-- AlterTable
ALTER TABLE "EmploeeEntity" ALTER COLUMN "link" SET NOT NULL,
ALTER COLUMN "link" SET DEFAULT '';
