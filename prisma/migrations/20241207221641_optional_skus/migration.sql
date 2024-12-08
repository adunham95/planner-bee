-- DropForeignKey
ALTER TABLE "OrderProduct" DROP CONSTRAINT "OrderProduct_ecard";

-- DropForeignKey
ALTER TABLE "OrderProduct" DROP CONSTRAINT "OrderProduct_eventTheme";

-- AlterTable
ALTER TABLE "OrderProduct" ALTER COLUMN "ecardSku" DROP NOT NULL,
ALTER COLUMN "eventThemeSku" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "OrderProduct" ADD CONSTRAINT "OrderProduct_ecard" FOREIGN KEY ("ecardSku") REFERENCES "ECardTemplate"("sku") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderProduct" ADD CONSTRAINT "OrderProduct_eventTheme" FOREIGN KEY ("eventThemeSku") REFERENCES "EventTheme"("sku") ON DELETE SET NULL ON UPDATE CASCADE;
