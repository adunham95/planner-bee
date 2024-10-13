-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,

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
CREATE TABLE "ECard" (
    "id" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "cost" INTEGER NOT NULL,

    CONSTRAINT "ECard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ECardComponent" (
    "id" TEXT NOT NULL,
    "ecardID" TEXT NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "ECardComponent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ECardComponentOption" (
    "id" TEXT NOT NULL,
    "ecardComponentID" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "ECardComponentOption_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cart" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Cart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CartItem" (
    "id" TEXT NOT NULL,
    "cartID" TEXT NOT NULL,
    "ecardSku" TEXT NOT NULL,

    CONSTRAINT "CartItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CartItemOption" (
    "id" TEXT NOT NULL,
    "cartItemID" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "ecardComponentID" TEXT NOT NULL,

    CONSTRAINT "CartItemOption_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ECard_sku_key" ON "ECard"("sku");

-- CreateIndex
CREATE INDEX "ECard_sku_idx" ON "ECard"("sku");

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ECardComponent" ADD CONSTRAINT "ECardComponent_ecardID_fkey" FOREIGN KEY ("ecardID") REFERENCES "ECard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ECardComponentOption" ADD CONSTRAINT "ECardComponentOption_ecardComponentID_fkey" FOREIGN KEY ("ecardComponentID") REFERENCES "ECardComponent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_cartID_fkey" FOREIGN KEY ("cartID") REFERENCES "Cart"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_ecardSku_fkey" FOREIGN KEY ("ecardSku") REFERENCES "ECard"("sku") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartItemOption" ADD CONSTRAINT "CartItemOption_cartItemID_fkey" FOREIGN KEY ("cartItemID") REFERENCES "CartItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartItemOption" ADD CONSTRAINT "CartItemOption_ecardComponentID_fkey" FOREIGN KEY ("ecardComponentID") REFERENCES "ECardComponent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
