-- DropForeignKey
ALTER TABLE "Recipient" DROP CONSTRAINT "Recipient_contactID_fkey";

-- AlterTable
ALTER TABLE "Recipient" ADD COLUMN     "email" TEXT,
ADD COLUMN     "firstName" TEXT,
ADD COLUMN     "lastName" TEXT,
ADD COLUMN     "phone" TEXT,
ALTER COLUMN "contactID" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Recipient" ADD CONSTRAINT "Recipient_contactID_fkey" FOREIGN KEY ("contactID") REFERENCES "Contact"("id") ON DELETE SET NULL ON UPDATE CASCADE;
