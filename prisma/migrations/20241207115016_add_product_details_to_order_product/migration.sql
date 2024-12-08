-- AddForeignKey
ALTER TABLE "OrderProduct" ADD CONSTRAINT "OrderProduct_ecard" FOREIGN KEY ("sku") REFERENCES "ECardTemplate"("sku") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderProduct" ADD CONSTRAINT "OrderProduct_eventTheme" FOREIGN KEY ("sku") REFERENCES "EventTheme"("sku") ON DELETE RESTRICT ON UPDATE CASCADE;
