/*
  Warnings:

  - The primary key for the `MovieImg` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `movie_img_id` on the `MovieImg` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `movie_idx` on the `MovieImg` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `Movies` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `movie_id` on the `Movies` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `Users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- DropForeignKey
ALTER TABLE `MovieImg` DROP FOREIGN KEY `MovieImg_movie_idx_fkey`;

-- AlterTable
ALTER TABLE `MovieImg` DROP PRIMARY KEY,
    MODIFY `movie_img_id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `movie_idx` INTEGER NOT NULL,
    ADD PRIMARY KEY (`movie_img_id`);

-- AlterTable
ALTER TABLE `Movies` DROP PRIMARY KEY,
    MODIFY `movie_id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`movie_id`);

-- AlterTable
ALTER TABLE `Users` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `MovieImg` ADD CONSTRAINT `MovieImg_movie_idx_fkey` FOREIGN KEY (`movie_idx`) REFERENCES `Movies`(`movie_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
