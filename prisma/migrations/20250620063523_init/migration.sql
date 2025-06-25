-- CreateEnum
CREATE TYPE "ShelfStatus" AS ENUM ('ONLINE', 'OFFLINE', 'MAINTENANCE', 'LOADING');

-- CreateEnum
CREATE TYPE "ShelfType" AS ENUM ('ONEHUNDRED', 'TWOHUNDRED');

-- CreateEnum
CREATE TYPE "SlotStatus" AS ENUM ('OPEN', 'CLOSE', 'REFILLING', 'UNUSABLE', 'MAINTAINING');

-- CreateTable
CREATE TABLE "Shelf" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "ShelfType" NOT NULL DEFAULT 'ONEHUNDRED',
    "status" "ShelfStatus" NOT NULL DEFAULT 'ONLINE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedBy" TEXT NOT NULL,

    CONSTRAINT "Shelf_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Slot" (
    "id" TEXT NOT NULL,
    "shelfId" TEXT NOT NULL,
    "drugId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 0,
    "status" "SlotStatus" NOT NULL DEFAULT 'CLOSE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedBy" TEXT NOT NULL,

    CONSTRAINT "Slot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Drugs" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "dose" TEXT NOT NULL,
    "purpose" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "usage" TEXT NOT NULL,
    "warning" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "documents" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Drugs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Shelf_name_key" ON "Shelf"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Slot_drugId_key" ON "Slot"("drugId");

-- CreateIndex
CREATE UNIQUE INDEX "Slot_name_key" ON "Slot"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Drugs_name_key" ON "Drugs"("name");

-- AddForeignKey
ALTER TABLE "Slot" ADD CONSTRAINT "Slot_shelfId_fkey" FOREIGN KEY ("shelfId") REFERENCES "Shelf"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Slot" ADD CONSTRAINT "Slot_drugId_fkey" FOREIGN KEY ("drugId") REFERENCES "Drugs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
