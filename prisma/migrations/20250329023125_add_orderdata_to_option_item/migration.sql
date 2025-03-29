-- AlterTable
ALTER TABLE "OptionItem" ADD COLUMN     "orderID" TEXT;

-- AddForeignKey
ALTER TABLE "OptionItem" ADD CONSTRAINT "OptionItem_orderID_fkey" FOREIGN KEY ("orderID") REFERENCES "Order"("id") ON DELETE SET NULL ON UPDATE CASCADE;
