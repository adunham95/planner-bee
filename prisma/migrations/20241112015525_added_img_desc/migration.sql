/*
  Warnings:

  - Added the required column `description` to the `EventTheme` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imgURL` to the `EventTheme` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EventTheme" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "imgURL" TEXT NOT NULL;
