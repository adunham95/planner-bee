/*
  Warnings:

  - You are about to drop the column `orderID` on the `EcardOrderOptions` table. All the data in the column will be lost.
  - You are about to drop the column `orderType` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `senderEmail` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `senderID` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `senderName` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `orderID` on the `Recipient` table. All the data in the column will be lost.
  - You are about to drop the `OrderProduct` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OrderProductOption` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "EcardOrderOptions" DROP CONSTRAINT "EcardOrderOptions_orderID_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_senderID_fkey";

-- DropForeignKey
ALTER TABLE "OrderProduct" DROP CONSTRAINT "OrderProduct_ecard";

-- DropForeignKey
ALTER TABLE "OrderProduct" DROP CONSTRAINT "OrderProduct_eventTheme";

-- DropForeignKey
ALTER TABLE "OrderProduct" DROP CONSTRAINT "OrderProduct_orderID_fkey";

-- DropForeignKey
ALTER TABLE "OrderProductOption" DROP CONSTRAINT "OrderProductOption_orderProductID_fkey";

-- DropForeignKey
ALTER TABLE "Recipient" DROP CONSTRAINT "Recipient_orderID_fkey";

-- AlterTable
ALTER TABLE "ECardComponent" ADD COLUMN     "key" TEXT;

-- AlterTable
ALTER TABLE "EcardOrderOptions" DROP COLUMN "orderID";

-- AlterTable
ALTER TABLE "EventThemeOptions" ADD COLUMN     "key" TEXT;

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "orderType",
DROP COLUMN "senderEmail",
DROP COLUMN "senderID",
DROP COLUMN "senderName",
ADD COLUMN     "customerEmail" TEXT DEFAULT '',
ADD COLUMN     "customerID" TEXT,
ADD COLUMN     "customerName" TEXT DEFAULT '';

-- AlterTable
ALTER TABLE "Recipient" DROP COLUMN "orderID",
ADD COLUMN     "eventID" TEXT;

-- DropTable
DROP TABLE "OrderProduct";

-- DropTable
DROP TABLE "OrderProductOption";

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "orderID" TEXT NOT NULL,
    "senderEmail" TEXT DEFAULT '',
    "senderID" TEXT,
    "eventNumber" TEXT DEFAULT '',
    "eventDate" TIMESTAMP(3),
    "eventTemplateSku" TEXT NOT NULL,
    "invitationSku" TEXT,
    "addOns" TEXT[],

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventOption" (
    "id" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EventOption_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ECardComponent_key_idx" ON "ECardComponent"("key");

-- CreateIndex
CREATE INDEX "EventTheme_sku_idx" ON "EventTheme"("sku");

-- CreateIndex
CREATE INDEX "EventThemeOptions_key_idx" ON "EventThemeOptions"("key");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_customerID_fkey" FOREIGN KEY ("customerID") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_orderID_fkey" FOREIGN KEY ("orderID") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_senderID_fkey" FOREIGN KEY ("senderID") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_eventTemplateSku_fkey" FOREIGN KEY ("eventTemplateSku") REFERENCES "EventTheme"("sku") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_invitationSku_fkey" FOREIGN KEY ("invitationSku") REFERENCES "ECardTemplate"("sku") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recipient" ADD CONSTRAINT "Recipient_eventID_fkey" FOREIGN KEY ("eventID") REFERENCES "Event"("id") ON DELETE SET NULL ON UPDATE CASCADE;
