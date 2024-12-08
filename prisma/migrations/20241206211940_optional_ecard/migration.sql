-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_ecardSku_fkey";

-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "ecardSku" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_ecardSku_fkey" FOREIGN KEY ("ecardSku") REFERENCES "ECardTemplate"("sku") ON DELETE SET NULL ON UPDATE CASCADE;
