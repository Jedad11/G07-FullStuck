/*
  Warnings:

  - You are about to drop the column `rentailPrice` on the `resident_info` table. All the data in the column will be lost.
  - Added the required column `rentalPrice` to the `resident_info` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_resident_info" (
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
INSERT INTO "new_resident_info" ("building", "electricFee", "id", "residentId", "residentType", "roomType", "waterFee") SELECT "building", "electricFee", "id", "residentId", "residentType", "roomType", "waterFee" FROM "resident_info";
DROP TABLE "resident_info";
ALTER TABLE "new_resident_info" RENAME TO "resident_info";
CREATE UNIQUE INDEX "resident_info_residentId_key" ON "resident_info"("residentId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
