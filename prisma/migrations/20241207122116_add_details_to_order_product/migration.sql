/*
  Warnings:

  - Added the required column `ecardSku` to the `OrderProduct` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eventThemeSku` to the `OrderProduct` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "OrderProduct" DROP CONSTRAINT "OrderProduct_ecard";

-- DropForeignKey
ALTER TABLE "OrderProduct" DROP CONSTRAINT "OrderProduct_eventTheme";

-- AlterTable
ALTER TABLE "OrderProduct" ADD COLUMN     "ecardSku" TEXT NOT NULL,
ADD COLUMN     "eventThemeSku" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "OrderProduct" ADD CONSTRAINT "OrderProduct_ecard" FOREIGN KEY ("ecardSku") REFERENCES "ECardTemplate"("sku") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderProduct" ADD CONSTRAINT "OrderProduct_eventTheme" FOREIGN KEY ("eventThemeSku") REFERENCES "EventTheme"("sku") ON DELETE RESTRICT ON UPDATE CASCADE;
