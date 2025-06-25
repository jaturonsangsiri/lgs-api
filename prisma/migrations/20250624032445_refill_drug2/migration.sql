-- CreateTable
CREATE TABLE "DrugRefill" (
    "id" TEXT NOT NULL,
    "slotId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedBy" TEXT NOT NULL,

    CONSTRAINT "DrugRefill_pkey" PRIMARY KEY ("id")
);
