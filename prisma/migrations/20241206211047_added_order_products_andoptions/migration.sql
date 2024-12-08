-- CreateTable
CREATE TABLE "OrderProduct" (
    "id" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    "skuType" TEXT NOT NULL,
    "orderID" TEXT NOT NULL,

    CONSTRAINT "OrderProduct_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderProductOption" (
    "id" TEXT NOT NULL,
    "orderProductID" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OrderProductOption_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OrderProduct" ADD CONSTRAINT "OrderProduct_orderID_fkey" FOREIGN KEY ("orderID") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderProductOption" ADD CONSTRAINT "OrderProductOption_orderProductID_fkey" FOREIGN KEY ("orderProductID") REFERENCES "OrderProduct"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
