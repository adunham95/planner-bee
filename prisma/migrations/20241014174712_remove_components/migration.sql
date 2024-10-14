/*
  Warnings:

  - You are about to drop the column `componentKey` on the `ECardComponent` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `ECardComponent` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `ECardComponent` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `ECardComponent` table. All the data in the column will be lost.
  - You are about to drop the `ECard` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ECardComponentOption` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ECardCustomization` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `ecardComponentID` to the `ECardComponent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ecardID` to the `ECardComponent` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CartItem" DROP CONSTRAINT "CartItem_ecardSku_fkey";

-- DropForeignKey
ALTER TABLE "CartItemOption" DROP CONSTRAINT "CartItemOption_ecardComponentID_fkey";

-- DropForeignKey
ALTER TABLE "ECardComponentOption" DROP CONSTRAINT "ECardComponentOption_ecardComponentID_fkey";

-- DropForeignKey
ALTER TABLE "ECardCustomization" DROP CONSTRAINT "ECardCustomization_ecardComponentID_fkey";

-- DropForeignKey
ALTER TABLE "ECardCustomization" DROP CONSTRAINT "ECardCustomization_ecardID_fkey";

-- AlterTable
ALTER TABLE "ECardComponent" DROP COLUMN "componentKey",
DROP COLUMN "description",
DROP COLUMN "title",
DROP COLUMN "value",
ADD COLUMN     "ecardComponentID" TEXT NOT NULL,
ADD COLUMN     "ecardID" TEXT NOT NULL;

-- DropTable
DROP TABLE "ECard";

-- DropTable
DROP TABLE "ECardComponentOption";

-- DropTable
DROP TABLE "ECardCustomization";

-- CreateTable
CREATE TABLE "ECardTemplate" (
    "id" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "cost" INTEGER NOT NULL,

    CONSTRAINT "ECardTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ECardTemplate_sku_key" ON "ECardTemplate"("sku");

-- CreateIndex
CREATE INDEX "ECardTemplate_sku_idx" ON "ECardTemplate"("sku");

-- AddForeignKey
ALTER TABLE "ECardComponent" ADD CONSTRAINT "ECardComponent_ecardID_fkey" FOREIGN KEY ("ecardID") REFERENCES "ECardTemplate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_ecardSku_fkey" FOREIGN KEY ("ecardSku") REFERENCES "ECardTemplate"("sku") ON DELETE RESTRICT ON UPDATE CASCADE;
