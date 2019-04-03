# MySQL

## Installation

```bash
# Ubuntu
#!/bin/bash
sudo apt-get install mysql-server mysql-client
```

## Data types

```text
| Column           | Data type     | Note
| ---------------- | ------------- | -------------------------------------
| id               | INTEGER       | AUTO_INCREMENT, UNSIGNED                                                          |
| uuid             | CHAR(36)      | or CHAR(16) binary                                                                |
| title            | VARCHAR(255)  |                                                                                   |
| full name        | VARCHAR(70)   |                                                                                   |
| gender           | TINYINT       | UNSIGNED                                                                          |
| description      | TINYTEXT      | often may not be enough, use TEXT  instead                                        |
| post body        | TEXT          |                                                                                   |
| email            | VARCHAR(255)  |                                                                                   |
| url              | VARCHAR(2083) | MySQL version < 5.0.3 - use TEXT                                                  |
| salt             | CHAR(x)       | randomly generated string, usually of fixed length (x)                            |
| digest (md5)     | CHAR(32)      |                                                                                   |
| phone number     | VARCHAR(20)   |                                                                                   |
| US zip code      | CHAR(5)       | Use CHAR(10) if you store extended codes                                          |
| US/Canada p.code | CHAR(6)       |                                                                                   |
| file path        | VARCHAR(255)  |                                                                                   |
| 5-star rating    | DECIMAL(3,2)  | UNSIGNED                                                                          |
| price            | DECIMAL(10,2) | UNSIGNED                                                                          |
| date (creation)  | DATE/DATETIME | usually displayed as initial date of
                                     a post                                       |
| date (tracking)  | TIMESTAMP     | can be used for tracking changes in a
                                     post                                        |
| tags, categories | TINYTEXT      | comma separated values *                                                          |
| status           | TINYINT(1)    | 1 – published, 0 – unpublished, … You
                                     can also use ENUM for human-readable
                                     values
| json data        | JSON          | or LONGTEXT
```

## Recipes

### CREATE DATABASE

```sql
CREATE DATABASE database_name CHARACTER SET UTF8mb4 COLLATE utf8mb4_bin;
```

### CREATE USER

```sql
CREATE USER 'user_name'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON database_name.* TO 'user_name'@'localhost';
FLUSH PRIVILEGES;
```

### ADD COLUMN primary key

```sql
ALTER TABLE table_name ADD id INT NOT NULL PRIMARY KEY AUTO_INCREMENT;
```

### ADD COLUMN first

```sql
ALTER TABLE table_name ADD id INT NOT NULL PRIMARY KEY AUTO_INCREMENT FIRST;
```

### ADD COLUMN after

```sql
ALTER TABLE table_name ADD col_name_n VARCHAR AFTER col_name_1;
```

### ADD categories

```sql
CREATE TABLE person (
`id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
`name` VARCHAR(50)
);

CREATE TABLE fruits (
`fruit_name` VARCHAR(20) NOT NULL PRIMARY KEY,
`color` VARCHAR(20),
`price` INT
);

CREATE TABLE person_fruit (
`person_id` INT NOT NULL,
`fruit_name` VARCHAR(20) NOT NULL,
PRIMARY KEY(`person_id`, `fruit_name`)
);
```

Retriving:

```sql
SELECT p.*, f.*
FROM person p
INNER JOIN person_fruit pf
ON pf.person_id = p.id
INNER JOIN fruits f
ON f.fruit_name = pf.fruit_name
```

### ADD COLUMN value from another column

```sql
SELECT col_name_1, col_name_2, SUBSTR(options,13,5) AS options_new FROM table_name;
```

### SELECT with REGEXP

```sql
SELECT col_name FROM table_name WHERE col_name REGEXP '^(A|B|C)';
```

- [MySQL regexp 5.7](https://dev.mysql.com/doc/refman/5.7/en/regexp.html)
- [MySQL regexp 8.0](https://dev.mysql.com/doc/refman/8.0/en/regexp.html)

### UPDATE COLUMN with SUBSTRING (remove last char)

```sql
UPDATE table_name SET col_name = SUBSTRING(col_name FROM 1 FOR CHAR_LENGTH(ref_id) - 1);
```

## MySQL upgrade from 5.7 to 8.0

```bash
wget https://dev.mysql.com/get/mysql-apt-config_0.8.10-1_all.deb
sudo dpkg -i mysql-apt-config_0.8.10-1_all.deb
sudo apt install mysql-server
mysql_upgrade -u root -p
```

### MySQL upgrade errors

#### Can't find mysql.infoschema

```bash
mysql -u root -p
mysql> SET GLOBAL innodb_fast_shutdown = 1;
sudo mysql_upgrade -u root -p
```
