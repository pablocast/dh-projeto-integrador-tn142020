CREATE SCHEMA IF NOT EXISTS `projeto_integrador_t4` DEFAULT CHARACTER SET utf8 ;

CREATE TABLE IF NOT EXISTS `projeto_integrador_t4`.`usuarios` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `username` VARCHAR(16) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(32) NOT NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `address` VARCHAR(200) NOT NULL,
  `website` VARCHAR(45) NOT NULL,
  `phone` VARCHAR(25) NOT NULL,
  `company` VARCHAR(45) NULL,
  `about` VARCHAR(200) NULL,
  `photo` VARCHAR(40) NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `user_id_UNIQUE` (`user_id` ASC) VISIBLE,
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE);
  
CREATE TABLE IF NOT EXISTS `projeto_integrador_t4`.`enderecos` (
  `user_id` INT NOT NULL,
  `address_rua` VARCHAR(200) NOT NULL,
  `address_numero` DOUBLE NOT NULL,
  `address_cep` VARCHAR(8) NOT NULL,
  `address_cidade` VARCHAR(25) NOT NULL,
  `address_pais` VARCHAR(25) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `user_id_UNIQUE` (`user_id` ASC) VISIBLE,
  CONSTRAINT `user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `projeto_integrador_t4`.`usuarios` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
    
CREATE TABLE IF NOT EXISTS `projeto_integrador_t4`.`cursos` (
  `curso_id` INT NOT NULL,
  `category` VARCHAR(45) NOT NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `instructor` VARCHAR(45) NOT NULL,
  `published` TINYINT NULL,
  PRIMARY KEY (`curso_id`),
  UNIQUE INDEX `curso_id_UNIQUE` (`curso_id` ASC) VISIBLE);
  
CREATE TABLE IF NOT EXISTS `projeto_integrador_t4`.`instrutores` (
  `curso_id` INT NOT NULL,
  `nome` VARCHAR(200) NULL,
  `institucao` VARCHAR(200) NULL,
  PRIMARY KEY (`curso_id`),
  UNIQUE INDEX `curso_id_UNIQUE` (`curso_id` ASC) VISIBLE,
  CONSTRAINT `curso_id_instrutores`
    FOREIGN KEY (`curso_id`)
    REFERENCES `projeto_integrador_t4`.`cursos` (`curso_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE IF NOT EXISTS `projeto_integrador_t4`.`descricoes` (
  `curso_id` INT NOT NULL,
  `curso_name` VARCHAR(50) NULL,
  `curso_description` VARCHAR(200) NULL,
  `curso_image` VARCHAR(40) NULL,
  PRIMARY KEY (`curso_id`),
  UNIQUE INDEX `curso_id_UNIQUE` (`curso_id` ASC) VISIBLE,
  CONSTRAINT `curso_id_descricoes`
    FOREIGN KEY (`curso_id`)
    REFERENCES `projeto_integrador_t4`.`cursos` (`curso_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
    
CREATE TABLE IF NOT EXISTS `projeto_integrador_t4`.`aulas` (
  `curso_id` INT NOT NULL,
  `aula_id` INT NOT NULL,
  `aula_title` VARCHAR(45) NOT NULL,
  `aula_content` VARCHAR(200) NOT NULL,
  `aula_url` VARCHAR(100) NULL,
  PRIMARY KEY (`curso_id`, `aula_id`),
  UNIQUE INDEX `aula_id_UNIQUE` (`aula_id` ASC) VISIBLE,
  CONSTRAINT `curso_id_aulas`
    FOREIGN KEY (`curso_id`)
    REFERENCES `projeto_integrador_t4`.`cursos` (`curso_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
    
CREATE TABLE IF NOT EXISTS `projeto_integrador_t4`.`inscricoes` (
  `inscricao_id` INT NOT NULL,
  `curso_id` INT NULL,
  `updated` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `enrolled` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `student_id` INT NULL,
  INDEX `user_id_idx` (`student_id` ASC) VISIBLE,
  PRIMARY KEY (`inscricao_id`),
  UNIQUE INDEX `inscricao_id_UNIQUE` (`inscricao_id` ASC) VISIBLE,
  CONSTRAINT `user_id_inscricoes`
    FOREIGN KEY (`student_id`)
    REFERENCES `projeto_integrador_t4`.`usuarios` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
    
CREATE TABLE IF NOT EXISTS `projeto_integrador_t4`.`inscricoes_aulas` (
  `inscricao_id` INT NOT NULL,
  `aula_id` INT NULL,
  `aula_status` TINYINT NOT NULL,
  `updated` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX `aula_id_idx` (`aula_id` ASC) VISIBLE,
  CONSTRAINT `inscricao_id`
    FOREIGN KEY (`inscricao_id`)
    REFERENCES `projeto_integrador_t4`.`inscricoes` (`inscricao_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `aula_id`
    FOREIGN KEY (`aula_id`)
    REFERENCES `projeto_integrador_t4`.`aulas` (`aula_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION); 

CREATE TABLE IF NOT EXISTS `projeto_integrador_t4`.`empresas` (
  `company_id` INT NOT NULL AUTO_INCREMENT,
  `company_email` VARCHAR(255) NOT NULL,
  `company_city` VARCHAR(45) NOT NULL,
  `company_country` VARCHAR(45) NOT NULL,
  `employee_name` VARCHAR(32) NOT NULL,
  `company_name` VARCHAR(255) NOT NULL,
  `company_phone` VARCHAR(255) NOT NULL,
  `company_num_devs` VARCHAR(255) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`company_id`),
  UNIQUE INDEX `company_email_UNIQUE` (`company_email` ASC) VISIBLE,
  UNIQUE INDEX `company_id_UNIQUE` (`company_id` ASC) VISIBLE);

drop table `projeto_integrador_t4`.`empresas`

select * from `projeto_integrador_t4`.`usuarios`;
select * from `projeto_integrador_t4`.`empresas`;