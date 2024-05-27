/*
  Warnings:

  - Added the required column `address` to the `Contact` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `contact` ADD COLUMN `address` VARCHAR(191) NOT NULL;
