/*
  Warnings:

  - You are about to drop the `Cart` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CartItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CartItemOption` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CartItem" DROP CONSTRAINT "CartItem_cartID_fkey";

-- DropForeignKey
ALTER TABLE "CartItem" DROP CONSTRAINT "CartItem_ecardSku_fkey";

-- DropForeignKey
ALTER TABLE "CartItemOption" DROP CONSTRAINT "CartItemOption_cartItemID_fkey";

-- DropTable
DROP TABLE "Cart";

-- DropTable
DROP TABLE "CartItem";

-- DropTable
DROP TABLE "CartItemOption";

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "orderNumber" TEXT DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "ecardSku" TEXT NOT NULL,
    "senderName" TEXT DEFAULT '',
    "senderEmail" TEXT DEFAULT '',
    "senderID" TEXT,
    "recipeintFirstName" TEXT DEFAULT '',
    "recipeintLastName" TEXT DEFAULT '',
    "recipeintEmail" TEXT DEFAULT '',
    "status" TEXT DEFAULT 'draft',

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EcardOrderOptions" (
    "id" TEXT NOT NULL,
    "orderID" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "ecardComponentID" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EcardOrderOptions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_ecardSku_fkey" FOREIGN KEY ("ecardSku") REFERENCES "ECardTemplate"("sku") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_senderID_fkey" FOREIGN KEY ("senderID") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EcardOrderOptions" ADD CONSTRAINT "EcardOrderOptions_orderID_fkey" FOREIGN KEY ("orderID") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
