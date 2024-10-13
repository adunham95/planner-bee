/*
  Warnings:

  - You are about to drop the column `ecardID` on the `ECardComponent` table. All the data in the column will be lost.
  - Added the required column `componentKey` to the `ECardComponent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `ECardComponent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `ECardComponent` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ECardComponent" DROP CONSTRAINT "ECardComponent_ecardID_fkey";

-- AlterTable
ALTER TABLE "ECardComponent" DROP COLUMN "ecardID",
ADD COLUMN     "componentKey" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "ECardCustomization" (
    "id" TEXT NOT NULL,
    "ecardComponentID" TEXT NOT NULL,
    "ecardID" TEXT NOT NULL,

    CONSTRAINT "ECardCustomization_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ECardCustomization" ADD CONSTRAINT "ECardCustomization_ecardComponentID_fkey" FOREIGN KEY ("ecardComponentID") REFERENCES "ECardComponent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ECardCustomization" ADD CONSTRAINT "ECardCustomization_ecardID_fkey" FOREIGN KEY ("ecardID") REFERENCES "ECard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
