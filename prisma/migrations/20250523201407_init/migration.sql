-- CreateTable
CREATE TABLE "User" (
    "Id" TEXT NOT NULL,
    "PublicKey" TEXT NOT NULL,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Airdrop" (
    "Id" TEXT NOT NULL,
    "PublicKey" TEXT NOT NULL,
    "Signature" TEXT NOT NULL,
    "Status" BOOLEAN NOT NULL,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Airdrop_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_PublicKey_key" ON "User"("PublicKey");

-- AddForeignKey
ALTER TABLE "Airdrop" ADD CONSTRAINT "Airdrop_PublicKey_fkey" FOREIGN KEY ("PublicKey") REFERENCES "User"("PublicKey") ON DELETE RESTRICT ON UPDATE CASCADE;
