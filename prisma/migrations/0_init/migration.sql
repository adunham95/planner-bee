-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ECardTemplate" (
    "id" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "cost" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ECardTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ECardComponent" (
    "id" TEXT NOT NULL,
    "ecardComponentID" TEXT NOT NULL,
    "ecardID" TEXT NOT NULL,
    "label" TEXT DEFAULT '',
    "editable" BOOLEAN DEFAULT false,
    "default" TEXT DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ECardComponent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "orderNumber" TEXT DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "ecardSku" TEXT NOT NULL,
    "senderName" TEXT DEFAULT '',
    "senderEmail" TEXT DEFAULT '',
    "senderID" TEXT,
    "recipeintFirstName" TEXT DEFAULT '',
    "recipeintLastName" TEXT DEFAULT '',
    "recipeintEmail" TEXT DEFAULT '',
    "status" TEXT DEFAULT 'draft',

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EcardOrderOptions" (
    "id" TEXT NOT NULL,
    "orderID" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "ecardComponentID" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EcardOrderOptions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ECardTemplate_sku_key" ON "ECardTemplate"("sku");

-- CreateIndex
CREATE INDEX "ECardTemplate_sku_idx" ON "ECardTemplate"("sku");

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ECardComponent" ADD CONSTRAINT "ECardComponent_ecardID_fkey" FOREIGN KEY ("ecardID") REFERENCES "ECardTemplate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_ecardSku_fkey" FOREIGN KEY ("ecardSku") REFERENCES "ECardTemplate"("sku") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_senderID_fkey" FOREIGN KEY ("senderID") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EcardOrderOptions" ADD CONSTRAINT "EcardOrderOptions_orderID_fkey" FOREIGN KEY ("orderID") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

