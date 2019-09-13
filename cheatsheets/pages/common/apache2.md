# Apache2

## Install

### Install (Ubuntu)

```bash
sudo apt-get install apache2
```

### Install PHP mod (Ubuntu)

```bash
sudo apt-get install libapache2-mod-php7.2
```

## Use

### Enable a site

Edit /etc/sites-available/example.com.conf:

```apache
<VirtualHost *:80>
  ServerName example.com
  DocumentRoot /var/www/example.com
  ErrorLog ${APACHE_LOG_DIR}/example.com-error.log
  CustomLog ${APACHE_LOG_DIR}/example.com-access.log combined
</VirtualHost>
```
