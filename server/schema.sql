DROP DATABASE IF EXISTS Admin;
CREATE DATABASE Admin;

USE Admin;

CREATE TABLE admin(
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(75) NOT NULL UNIQUE,
    password VARCHAR(150) NOT NULL, 
    PRIMARY KEY(id)
);


-- to run this schema you need to type this following code.
--  mysql -u root -p<schema.sql

INSERT INTO admin(username,password) VALUES("admin","12345678");
