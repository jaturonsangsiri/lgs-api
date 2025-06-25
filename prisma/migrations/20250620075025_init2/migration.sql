/*
  Warnings:

  - You are about to drop the column `name` on the `Drugs` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[namE]` on the table `Drugs` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `namE` to the `Drugs` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Drugs_name_key";

-- AlterTable
ALTER TABLE "Drugs" DROP COLUMN "name",
ADD COLUMN     "namE" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Drugs_namE_key" ON "Drugs"("namE");
