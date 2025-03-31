/*
  Warnings:

  - You are about to drop the column `email` on the `Recipient` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `Recipient` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `Recipient` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Recipient` table. All the data in the column will be lost.
  - Added the required column `contactID` to the `Recipient` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Recipient" DROP COLUMN "email",
DROP COLUMN "firstName",
DROP COLUMN "lastName",
DROP COLUMN "phone",
ADD COLUMN     "contactID" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Contact" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "userID" TEXT,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Recipient" ADD CONSTRAINT "Recipient_contactID_fkey" FOREIGN KEY ("contactID") REFERENCES "Contact"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
