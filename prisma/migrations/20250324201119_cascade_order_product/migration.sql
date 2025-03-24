-- DropForeignKey
ALTER TABLE "OrderProductOption" DROP CONSTRAINT "OrderProductOption_orderProductID_fkey";

-- AddForeignKey
ALTER TABLE "OrderProductOption" ADD CONSTRAINT "OrderProductOption_orderProductID_fkey" FOREIGN KEY ("orderProductID") REFERENCES "OrderProduct"("id") ON DELETE CASCADE ON UPDATE CASCADE;
