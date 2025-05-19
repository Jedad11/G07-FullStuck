-- CreateTable
CREATE TABLE "user" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "profilePicture" TEXT
);

-- CreateTable
CREATE TABLE "resident" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "residentName" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "resident_info" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "residentId" INTEGER NOT NULL,
    "residentType" TEXT NOT NULL,
    "building" TEXT NOT NULL,
    "roomType" TEXT NOT NULL,
    "electricFee" REAL NOT NULL,
    "waterFee" REAL NOT NULL,
    "rentalPrice" INTEGER NOT NULL,
    CONSTRAINT "resident_info_residentId_fkey" FOREIGN KEY ("residentId") REFERENCES "resident" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "resident_facilities" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "residentId" INTEGER NOT NULL,
    "aircon" BOOLEAN NOT NULL DEFAULT false,
    "furnished" BOOLEAN NOT NULL DEFAULT false,
    "television" BOOLEAN NOT NULL DEFAULT false,
    "waterHeater" BOOLEAN NOT NULL DEFAULT false,
    "inRoomBathroom" BOOLEAN NOT NULL DEFAULT false,
    "refrigerator" BOOLEAN NOT NULL DEFAULT false,
    "pool" BOOLEAN NOT NULL DEFAULT false,
    "parking" BOOLEAN NOT NULL DEFAULT false,
    "security" BOOLEAN NOT NULL DEFAULT false,
    "fitness" BOOLEAN NOT NULL DEFAULT false,
    "internet" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "resident_facilities_residentId_fkey" FOREIGN KEY ("residentId") REFERENCES "resident" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "resident_owner" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "residentId" INTEGER NOT NULL,
    "ownerName" TEXT NOT NULL,
    "ownerPhone" TEXT NOT NULL,
    "ownerEmail" TEXT NOT NULL,
    "ownerContactLine" TEXT,
    CONSTRAINT "resident_owner_residentId_fkey" FOREIGN KEY ("residentId") REFERENCES "resident" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "resident_address" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "residentId" INTEGER NOT NULL,
    "houseNumber" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "subDistrict" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "province" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    CONSTRAINT "resident_address_residentId_fkey" FOREIGN KEY ("residentId") REFERENCES "resident" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "booking" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "residentId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "roomType" TEXT NOT NULL,
    "bedType" TEXT NOT NULL,
    "checkInDate" DATETIME NOT NULL,
    "checkOutDate" DATETIME NOT NULL,
    CONSTRAINT "booking_residentId_fkey" FOREIGN KEY ("residentId") REFERENCES "resident" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "booking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "review" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "residentId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "cleanlinessRating" REAL NOT NULL,
    "serviceRating" REAL NOT NULL,
    "locationRating" REAL NOT NULL,
    "facilitiesRating" REAL NOT NULL,
    "overallRating" REAL NOT NULL,
    "message" TEXT NOT NULL,
    "guestStatus" TEXT NOT NULL,
    "stayPeriod" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "review_residentId_fkey" FOREIGN KEY ("residentId") REFERENCES "resident" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "resident_info_residentId_key" ON "resident_info"("residentId");

-- CreateIndex
CREATE UNIQUE INDEX "resident_facilities_residentId_key" ON "resident_facilities"("residentId");

-- CreateIndex
CREATE UNIQUE INDEX "resident_owner_residentId_key" ON "resident_owner"("residentId");

-- CreateIndex
CREATE UNIQUE INDEX "resident_address_residentId_key" ON "resident_address"("residentId");
