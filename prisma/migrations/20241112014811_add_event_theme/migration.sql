-- CreateTable
CREATE TABLE "EventTheme" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    "cost" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EventTheme_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventThemeOptions" (
    "id" TEXT NOT NULL,
    "label" TEXT DEFAULT '',
    "editable" BOOLEAN DEFAULT false,
    "default" TEXT DEFAULT '',
    "options" TEXT DEFAULT '',
    "componentID" TEXT NOT NULL,
    "eventThemeID" TEXT NOT NULL,

    CONSTRAINT "EventThemeOptions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EventTheme_sku_key" ON "EventTheme"("sku");

-- AddForeignKey
ALTER TABLE "EventThemeOptions" ADD CONSTRAINT "EventThemeOptions_eventThemeID_fkey" FOREIGN KEY ("eventThemeID") REFERENCES "EventTheme"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
