# MySQL Troubleshooting

## Authentication

### Client does not support authentication protocol

```mysql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '{{password}}';
FLUSH PRIVILEGES;
```
