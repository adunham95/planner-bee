/*
  Warnings:

  - You are about to drop the column `editaable` on the `ECardComponent` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ECardComponent" DROP COLUMN "editaable",
ADD COLUMN     "editable" BOOLEAN DEFAULT false;
