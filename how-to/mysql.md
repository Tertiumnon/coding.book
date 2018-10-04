# MySQL

## Installation

```bash
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
| description      | TINYTEXT      | often may not be enough, use TEXT
                                     instead
| post body        | TEXT          |                                                                                   |
| email            | VARCHAR(255)  |                                                                                   |
| url              | VARCHAR(2083) | MySQL version < 5.0.3 - use TEXT                                                  |
| salt             | CHAR(x)       | randomly generated string, usually of
                                     fixed length (x)
| digest (md5)     | CHAR(32)      |                                                                                   |
| phone number     | VARCHAR(20)   |                                                                                   |
| US zip code      | CHAR(5)       | Use CHAR(10) if you store extended
                                     codes
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

### CREATE USER

```SQL
CREATE USER 'user_name'@'localhost'
IDENTIFIED WITH mysql_native_password BY 'password';
GRANT ALL PRIVILEGES ON database_name.* TO 'user_name'@'localhost' WITH GRANT OPTION;
```

### ADD COLUMN primary key

```SQL
ALTER TABLE table_name ADD id INT NOT NULL PRIMARY KEY AUTO_INCREMENT;
```

### ADD COLUMN first

```SQL
ALTER TABLE table_name ADD id INT NOT NULL PRIMARY KEY AUTO_INCREMENT FIRST;
```

### ADD COLUMN after

```SQL
ALTER TABLE table_name ADD title VARCHAR AFTER id;
```

### ADD categories

```SQL
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

```SQL
SELECT p.*, f.*
FROM person p
INNER JOIN person_fruit pf
ON pf.person_id = p.id
INNER JOIN fruits f
ON f.fruit_name = pf.fruit_name
```

### ADD COLUMN value from another column

```SQL
SELECT title, options, SUBSTR(options,13,5) AS options_new FROM table_name;
```

### SELECT with REGEXP

```SQL
SELECT productname FROM products WHERE productname REGEXP '^(A|B|C)';
```

* [MySQL regexp 5.7](https://dev.mysql.com/doc/refman/5.7/en/regexp.html)
* [MySQL regexp 8.0](https://dev.mysql.com/doc/refman/8.0/en/regexp.html)
