/*
  Warnings:

  - You are about to drop the column `recipeintEmail` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `recipeintFirstName` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `recipeintLastName` on the `Order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "recipeintEmail",
DROP COLUMN "recipeintFirstName",
DROP COLUMN "recipeintLastName";

-- CreateTable
CREATE TABLE "Recipient" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "orderID" TEXT NOT NULL,

    CONSTRAINT "Recipient_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Recipient" ADD CONSTRAINT "Recipient_orderID_fkey" FOREIGN KEY ("orderID") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
