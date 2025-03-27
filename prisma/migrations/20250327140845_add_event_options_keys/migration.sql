-- CreateIndex
CREATE INDEX "Event_orderID_senderID_eventNumber_idx" ON "Event"("orderID", "senderID", "eventNumber");

-- CreateIndex
CREATE INDEX "EventOption_eventId_idx" ON "EventOption"("eventId");

-- CreateIndex
CREATE INDEX "Order_orderNumber_customerID_idx" ON "Order"("orderNumber", "customerID");

-- AddForeignKey
ALTER TABLE "EventOption" ADD CONSTRAINT "EventOption_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
