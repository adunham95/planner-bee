-- AlterTable
ALTER TABLE "ECardTemplate" ADD COLUMN     "visible" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "EventTheme" ADD COLUMN     "eCardSku" TEXT;

-- AddForeignKey
ALTER TABLE "EventTheme" ADD CONSTRAINT "EventTheme_eCardSku_fkey" FOREIGN KEY ("eCardSku") REFERENCES "ECardTemplate"("sku") ON DELETE SET NULL ON UPDATE CASCADE;
