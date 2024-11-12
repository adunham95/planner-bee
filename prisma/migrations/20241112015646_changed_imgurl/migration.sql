/*
  Warnings:

  - You are about to drop the column `imgURL` on the `EventTheme` table. All the data in the column will be lost.
  - Added the required column `imageURL` to the `EventTheme` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EventTheme" DROP COLUMN "imgURL",
ADD COLUMN     "imageURL" TEXT NOT NULL;
