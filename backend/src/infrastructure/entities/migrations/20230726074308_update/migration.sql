/*
  Warnings:

  - A unique constraint covering the columns `[surname]` on the table `EmploeeEntity` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "EmploeeEntity_patronymic_key";

-- CreateIndex
CREATE UNIQUE INDEX "EmploeeEntity_surname_key" ON "EmploeeEntity"("surname");
