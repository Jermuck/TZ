-- DropForeignKey
ALTER TABLE "TokenEntity" DROP CONSTRAINT "TokenEntity_emploeeId_fkey";

-- AddForeignKey
ALTER TABLE "TokenEntity" ADD CONSTRAINT "TokenEntity_emploeeId_fkey" FOREIGN KEY ("emploeeId") REFERENCES "EmploeeEntity"("id") ON DELETE CASCADE ON UPDATE CASCADE;
