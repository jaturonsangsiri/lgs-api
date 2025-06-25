/*
  Warnings:

  - You are about to drop the column `drugId` on the `Slot` table. All the data in the column will be lost.
  - You are about to drop the column `shelfId` on the `Slot` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Slot" DROP CONSTRAINT "Slot_drugId_fkey";

-- DropForeignKey
ALTER TABLE "Slot" DROP CONSTRAINT "Slot_shelfId_fkey";

-- DropIndex
DROP INDEX "Slot_drugId_key";

-- DropIndex
DROP INDEX "Slot_name_key";

-- AlterTable
ALTER TABLE "Slot" DROP COLUMN "drugId",
DROP COLUMN "shelfId";
