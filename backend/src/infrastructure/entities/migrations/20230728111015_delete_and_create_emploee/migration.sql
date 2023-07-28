-- CreateTable
CREATE TABLE "DeleteEmploee" (
    "id" TEXT NOT NULL,
    "emploeeId" TEXT NOT NULL,
    "dateDelete" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DeleteEmploee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CreateEmploee" (
    "id" TEXT NOT NULL,
    "emploeeId" TEXT NOT NULL,
    "dataCreate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CreateEmploee_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DeleteEmploee_emploeeId_key" ON "DeleteEmploee"("emploeeId");

-- CreateIndex
CREATE UNIQUE INDEX "CreateEmploee_emploeeId_key" ON "CreateEmploee"("emploeeId");
