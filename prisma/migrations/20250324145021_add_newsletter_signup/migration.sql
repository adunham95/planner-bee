-- CreateTable
CREATE TABLE "NewsletterSignUp" (
    "id" TEXT NOT NULL,
    "email" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "NewsletterSignUp_pkey" PRIMARY KEY ("id")
);
