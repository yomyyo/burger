CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
    id INTEGER(11) AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT false
);