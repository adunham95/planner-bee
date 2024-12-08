/*
  Warnings:

  - You are about to drop the column `sku` on the `OrderProduct` table. All the data in the column will be lost.
  - You are about to drop the column `skuType` on the `OrderProduct` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "OrderProduct" DROP COLUMN "sku",
DROP COLUMN "skuType";
