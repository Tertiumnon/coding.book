# Ningx

## Install

### Install (Ubuntu)

```bash
#!/bin/bash
sudo apt-get install nginx
```

## Use

### Enable PHP-FPM

Edit /etc/php/php7.2/fpm/pool.d/www.conf:

```text
;listen = /run/php/php7.2-fpm.sock
listen = 127.0.0.1:9005
```

Restart:

```bash
sudo service php7.2-fpm restart
```

### Enable a site

Edit /etc/nginx/sites-available/default:

```text
server {
        listen 80 default_server;
        listen [::]:80 default_server;

        root /usr/share/nginx/html;
        index index.php index.html index.htm;

        server_name localhost;

        location / {
                try_files $uri $uri/ =404;
        }

        location ~ \.php$ {
                # fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;
                fastcgi_pass 127.0.0.1:9005;
                include fastcgi_params;
        }
}
```
