/*
  Warnings:

  - A unique constraint covering the columns `[link]` on the table `EmploeeEntity` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "EmploeeEntity_link_key" ON "EmploeeEntity"("link");
