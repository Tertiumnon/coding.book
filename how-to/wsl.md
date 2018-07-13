# WSL (Bash on Windows)

## SSH

Install:

```Bash
sudo apt-get install openssh-server
sudo service ssh start
```

Edit config:

```Bash
sudo nano /etc/ssh/sshd_config
```

/etc/ssh/sshd_config:

```File
Port 22
PermitRootLogin no
AllowUsers yourusername
PasswordAuthentication yes
UsePrivilegeSeparation no
```

Restart:

```Bash
sudo service ssh --full-restart
```
