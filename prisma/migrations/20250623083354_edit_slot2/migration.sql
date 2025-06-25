/*
  Warnings:

  - A unique constraint covering the columns `[drugId]` on the table `Slot` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `drugId` to the `Slot` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shelfId` to the `Slot` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Slot" ADD COLUMN     "drugId" TEXT NOT NULL,
ADD COLUMN     "shelfId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Slot_drugId_key" ON "Slot"("drugId");

-- AddForeignKey
ALTER TABLE "Slot" ADD CONSTRAINT "Slot_shelfId_fkey" FOREIGN KEY ("shelfId") REFERENCES "Shelf"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Slot" ADD CONSTRAINT "Slot_drugId_fkey" FOREIGN KEY ("drugId") REFERENCES "Drugs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
