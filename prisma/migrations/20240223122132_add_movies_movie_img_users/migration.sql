-- CreateTable
CREATE TABLE `Users` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Movies` (
    `movie_id` BIGINT NOT NULL AUTO_INCREMENT,
    `movie_name` VARCHAR(191) NOT NULL,
    `movie_intro` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`movie_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MovieImg` (
    `movie_img_id` BIGINT NOT NULL AUTO_INCREMENT,
    `movie_img_path` VARCHAR(191) NOT NULL,
    `movie_img_name` VARCHAR(191) NOT NULL,
    `movie_img_uuid` VARCHAR(191) NOT NULL,
    `movie_idx` BIGINT NOT NULL,

    PRIMARY KEY (`movie_img_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `MovieImg` ADD CONSTRAINT `MovieImg_movie_idx_fkey` FOREIGN KEY (`movie_idx`) REFERENCES `Movies`(`movie_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
