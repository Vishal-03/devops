-- CreateTable
CREATE TABLE "User" (
    "Name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("Name")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
