/*
  Warnings:

  - You are about to drop the column `ecardSku` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `eventDate` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the `EcardOrderOptions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EventOption` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "EventOption" DROP CONSTRAINT "EventOption_eventId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_ecardSku_fkey";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "ecardSku",
DROP COLUMN "eventDate";

-- AlterTable
ALTER TABLE "Recipient" ADD COLUMN     "eCardID" TEXT;

-- DropTable
DROP TABLE "EcardOrderOptions";

-- DropTable
DROP TABLE "EventOption";

-- CreateTable
CREATE TABLE "ECard" (
    "id" TEXT NOT NULL,
    "orderID" TEXT NOT NULL,
    "senderEmail" TEXT DEFAULT '',
    "senderID" TEXT,
    "deliveryDate" TIMESTAMP(3) NOT NULL,
    "eCardNumber" TEXT DEFAULT '',
    "eCardTemplateSku" TEXT NOT NULL,
    "addOns" TEXT[],

    CONSTRAINT "ECard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OptionItem" (
    "id" TEXT NOT NULL,
    "eCardId" TEXT,
    "eventId" TEXT,
    "value" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OptionItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ECard_orderID_senderID_eCardNumber_idx" ON "ECard"("orderID", "senderID", "eCardNumber");

-- CreateIndex
CREATE INDEX "OptionItem_eCardId_eventId_idx" ON "OptionItem"("eCardId", "eventId");

-- AddForeignKey
ALTER TABLE "ECard" ADD CONSTRAINT "ECard_orderID_fkey" FOREIGN KEY ("orderID") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ECard" ADD CONSTRAINT "ECard_senderID_fkey" FOREIGN KEY ("senderID") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ECard" ADD CONSTRAINT "ECard_eCardTemplateSku_fkey" FOREIGN KEY ("eCardTemplateSku") REFERENCES "ECardTemplate"("sku") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OptionItem" ADD CONSTRAINT "OptionItem_eCardId_fkey" FOREIGN KEY ("eCardId") REFERENCES "ECard"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OptionItem" ADD CONSTRAINT "OptionItem_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recipient" ADD CONSTRAINT "Recipient_eCardID_fkey" FOREIGN KEY ("eCardID") REFERENCES "ECard"("id") ON DELETE SET NULL ON UPDATE CASCADE;
