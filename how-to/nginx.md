# Ningx

## Installation

```bash
#!/bin/bash
sudo apt-get install nginx
```

## PHP-FPM

```ini
# /etc/php/php7.2/fpm/pool.d/www.conf

;listen = /run/php/php7.2-fpm.sock
listen = 127.0.0.1:9005
```

```bash
#!/bin/bash
sudo service php7.2-fpm restart
```

## Site config

```nginx
# /etc/nginx/sites-available/default

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