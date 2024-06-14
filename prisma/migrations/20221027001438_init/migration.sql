-- CreateTable
CREATE TABLE `Chamado` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `assunto` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `dataAbertura` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dataFechamento` DATETIME(3) NULL,
    `situacao` ENUM('ABERTO', 'EM_ANALISE', 'FECHADO') NOT NULL DEFAULT 'ABERTO',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
