-- MySQL Script generated by MySQL Workbench
-- Thu Oct  7 00:19:14 2021
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema project_gd3
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema project_gd3
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `project_gd3` DEFAULT CHARACTER SET utf8mb4 ;
USE `project_gd3` ;

-- -----------------------------------------------------
-- Table `project_gd3`.`apis`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `project_gd3`.`apis` (
  `id` CHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_bin' NOT NULL,
  `url` VARCHAR(255) NULL DEFAULT NULL,
  `method` VARCHAR(255) NULL DEFAULT NULL,
  `description` VARCHAR(200) NULL DEFAULT NULL,
  `isDeleted` INT(1) NULL DEFAULT NULL,
  `createdBy` CHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_bin' NULL DEFAULT NULL,
  `updatedBy` CHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_bin' NULL DEFAULT NULL,
  `createdAt` DATETIME NULL DEFAULT NULL,
  `updatedAt` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `project_gd3`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `project_gd3`.`users` (
  `id` CHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_bin' NOT NULL,
  `username` VARCHAR(50) NULL DEFAULT NULL,
  `password` VARCHAR(250) NULL DEFAULT NULL,
  `age` INT(11) NULL DEFAULT NULL,
  `email` VARCHAR(50) NULL DEFAULT NULL,
  `phone` VARCHAR(20) NULL DEFAULT NULL,
  `address` VARCHAR(500) NULL DEFAULT NULL,
  `isActive` INT(1) NULL DEFAULT NULL,
  `identityNumber` VARCHAR(36) NULL DEFAULT NULL,
  `socialInsurance` VARCHAR(36) NULL DEFAULT NULL,
  `avatar` VARCHAR(255) NULL DEFAULT NULL,
  `isDeleted` INT(1) NULL DEFAULT NULL,
  `createdBy` CHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_bin' NULL DEFAULT NULL,
  `updatedBy` CHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_bin' NULL DEFAULT NULL,
  `createdAt` DATETIME NULL DEFAULT NULL,
  `updatedAt` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `project_gd3`.`employees`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `project_gd3`.`employees` (
  `id` CHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_bin' NOT NULL,
  `lastName` VARCHAR(200) NULL DEFAULT NULL,
  `fullName` VARCHAR(200) NULL DEFAULT NULL,
  `isDeleted` INT(1) NULL DEFAULT NULL,
  `createdBy` CHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_bin' NULL DEFAULT NULL,
  `updatedBy` CHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_bin' NULL DEFAULT NULL,
  `createdAt` DATETIME NULL DEFAULT NULL,
  `updatedAt` DATETIME NULL DEFAULT NULL,
  `UserId` CHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_bin' NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `UserId` (`UserId` ASC) VISIBLE,
  CONSTRAINT `employees_ibfk_1`
    FOREIGN KEY (`UserId`)
    REFERENCES `project_gd3`.`users` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `project_gd3`.`forms`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `project_gd3`.`forms` (
  `id` CHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_bin' NOT NULL,
  `receiver` VARCHAR(200) NULL DEFAULT NULL,
  `type` INT(11) NULL DEFAULT NULL,
  `status` VARCHAR(36) NULL DEFAULT NULL,
  `dueDate` DATETIME NULL DEFAULT NULL,
  `isDeleted` INT(1) NULL DEFAULT NULL,
  `createdBy` CHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_bin' NULL DEFAULT NULL,
  `updatedBy` CHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_bin' NULL DEFAULT NULL,
  `createdAt` DATETIME NULL DEFAULT NULL,
  `updatedAt` DATETIME NULL DEFAULT NULL,
  `UserId` CHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_bin' NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `UserId` (`UserId` ASC) VISIBLE,
  CONSTRAINT `forms_ibfk_1`
    FOREIGN KEY (`UserId`)
    REFERENCES `project_gd3`.`users` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `project_gd3`.`formdetails`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `project_gd3`.`formdetails` (
  `id` CHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_bin' NOT NULL,
  `content` VARCHAR(255) NULL DEFAULT NULL,
  `managerComment` VARCHAR(255) NULL DEFAULT NULL,
  `isDeleted` INT(1) NULL DEFAULT NULL,
  `createdBy` CHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_bin' NULL DEFAULT NULL,
  `updatedBy` CHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_bin' NULL DEFAULT NULL,
  `createdAt` DATETIME NULL DEFAULT NULL,
  `updatedAt` DATETIME NULL DEFAULT NULL,
  `FormId` CHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_bin' NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FormId` (`FormId` ASC) VISIBLE,
  CONSTRAINT `formdetails_ibfk_1`
    FOREIGN KEY (`FormId`)
    REFERENCES `project_gd3`.`forms` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `project_gd3`.`roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `project_gd3`.`roles` (
  `id` CHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_bin' NOT NULL,
  `name` VARCHAR(100) NULL DEFAULT NULL,
  `description` VARCHAR(200) NULL DEFAULT NULL,
  `isDeleted` INT(1) NULL DEFAULT NULL,
  `createdBy` CHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_bin' NULL DEFAULT NULL,
  `updatedBy` CHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_bin' NULL DEFAULT NULL,
  `createdAt` DATETIME NULL DEFAULT NULL,
  `updatedAt` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `project_gd3`.`role_permissions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `project_gd3`.`role_permissions` (
  `id` CHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_bin' NOT NULL,
  `isDeleted` INT(1) NULL DEFAULT NULL,
  `createdBy` CHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_bin' NULL DEFAULT NULL,
  `updatedBy` CHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_bin' NULL DEFAULT NULL,
  `createdAt` DATETIME NULL DEFAULT NULL,
  `updatedAt` DATETIME NULL DEFAULT NULL,
  `RoleId` CHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_bin' NULL DEFAULT NULL,
  `ApiId` CHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_bin' NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `Role_permissions_ApiId_RoleId_unique` (`RoleId` ASC, `ApiId` ASC) VISIBLE,
  INDEX `ApiId` (`ApiId` ASC) VISIBLE,
  CONSTRAINT `role_permissions_ibfk_1`
    FOREIGN KEY (`RoleId`)
    REFERENCES `project_gd3`.`roles` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `role_permissions_ibfk_2`
    FOREIGN KEY (`ApiId`)
    REFERENCES `project_gd3`.`apis` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `project_gd3`.`userroles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `project_gd3`.`userroles` (
  `id` CHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_bin' NOT NULL,
  `isDeleted` INT(1) NULL DEFAULT NULL,
  `createdBy` CHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_bin' NULL DEFAULT NULL,
  `updatedBy` CHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_bin' NULL DEFAULT NULL,
  `createdAt` DATETIME NULL DEFAULT NULL,
  `updatedAt` DATETIME NULL DEFAULT NULL,
  `UserId` CHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_bin' NULL DEFAULT NULL,
  `RoleId` CHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_bin' NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `UserRoles_RoleId_UserId_unique` (`UserId` ASC, `RoleId` ASC) VISIBLE,
  INDEX `RoleId` (`RoleId` ASC) VISIBLE,
  CONSTRAINT `userroles_ibfk_1`
    FOREIGN KEY (`UserId`)
    REFERENCES `project_gd3`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `userroles_ibfk_2`
    FOREIGN KEY (`RoleId`)
    REFERENCES `project_gd3`.`roles` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
