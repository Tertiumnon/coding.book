# PHP

## Installation

```bash
#!/bin/bash
sudo apt-get install php7.2-common php7.2-dev
```

### Common extensions

```bash
#!/bin/bash
sudo apt-get install php-pear php7.2-bcmath php7.2-json php7.2-mbstring php7.2-mcrypt php7.2-curl php7.2-zip php7.2-xml php7.2-xmlrpc php7.2-xsl php7.2-intl php7.2-gd php7.2-imagick php7.2-ldap
```

### MySQL

```bash
#!/bin/bash
sudo apt-get install php7.2-mysql
```

### PostreSQL

```bash
#!/bin/bash
sudo apt-get install php7.2-pgsql
```

## Composer

https://getcomposer.org/download

## Debug

### xDebug

#### Remote debugging of cli-script

```bash
#!/bin/bash
php -dxdebug.remote_enable=1 -dxdebug.remote_mode=req -dxdebug.remote_port=9000 -dxdebug.remote_host=127.0.0.1 -dxdebug.remote_autostart=1 /path/to/script
```

## Troubleshooting

### Fatal error: Maximum execution time of 30 seconds exceeded

Try to encrease parameter "max_execution_time" in php.ini:

```text
max_execution_time = 30
```
