-- AlterTable
ALTER TABLE "ECard" ADD COLUMN     "dateTypeID" TEXT;

-- CreateTable
CREATE TABLE "DateType" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "userID" TEXT NOT NULL,

    CONSTRAINT "DateType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SignificantDate" (
    "id" TEXT NOT NULL,
    "contactID" TEXT NOT NULL,
    "dateTypeID" TEXT NOT NULL,
    "month" INTEGER NOT NULL,
    "day" INTEGER NOT NULL,
    "year" INTEGER,

    CONSTRAINT "SignificantDate_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ECard" ADD CONSTRAINT "ECard_dateTypeID_fkey" FOREIGN KEY ("dateTypeID") REFERENCES "DateType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DateType" ADD CONSTRAINT "DateType_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SignificantDate" ADD CONSTRAINT "SignificantDate_contactID_fkey" FOREIGN KEY ("contactID") REFERENCES "Contact"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SignificantDate" ADD CONSTRAINT "SignificantDate_dateTypeID_fkey" FOREIGN KEY ("dateTypeID") REFERENCES "DateType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
