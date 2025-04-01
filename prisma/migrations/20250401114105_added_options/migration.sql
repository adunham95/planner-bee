-- AlterTable
ALTER TABLE "ECardTemplate" ADD COLUMN     "includedOptions" TEXT[] DEFAULT ARRAY[]::TEXT[];
