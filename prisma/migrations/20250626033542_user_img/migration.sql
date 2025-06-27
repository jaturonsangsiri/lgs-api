/*
  Warnings:

  - The values [LOADING] on the enum `ShelfStatus` will be removed. If these variants are still used in the database, this will fail.
  - A unique constraint covering the columns `[username]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ShelfStatus_new" AS ENUM ('ONLINE', 'OFFLINE', 'MAINTENANCE', 'REFILLING');
ALTER TABLE "Shelf" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Shelf" ALTER COLUMN "status" TYPE "ShelfStatus_new" USING ("status"::text::"ShelfStatus_new");
ALTER TYPE "ShelfStatus" RENAME TO "ShelfStatus_old";
ALTER TYPE "ShelfStatus_new" RENAME TO "ShelfStatus";
DROP TYPE "ShelfStatus_old";
ALTER TABLE "Shelf" ALTER COLUMN "status" SET DEFAULT 'ONLINE';
COMMIT;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "img" TEXT NOT NULL DEFAULT '';

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");
