-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "eventDate" TIMESTAMP(3),
ADD COLUMN     "orderType" TEXT NOT NULL DEFAULT '';
