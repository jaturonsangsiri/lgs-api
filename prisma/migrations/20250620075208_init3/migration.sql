/*
  Warnings:

  - You are about to drop the column `namE` on the `Drugs` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Drugs` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Drugs` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Drugs_namE_key";

-- AlterTable
ALTER TABLE "Drugs" DROP COLUMN "namE",
ADD COLUMN     "name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Drugs_name_key" ON "Drugs"("name");
