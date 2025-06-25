/*
  Warnings:

  - You are about to drop the `DrugRefill` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "SystemLog" AS ENUM ('ADD_SHELF', 'OPEN_SHELF', 'CLOSE_SHELF', 'REFILLING_DRUG', 'MAINTAINING_SHELF');

-- AlterTable
ALTER TABLE "Slot" ADD COLUMN     "quantity" INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE "DrugRefill";

-- CreateTable
CREATE TABLE "log" (
    "id" TEXT NOT NULL,
    "type" "SystemLog" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedBy" TEXT NOT NULL,

    CONSTRAINT "log_pkey" PRIMARY KEY ("id")
);
