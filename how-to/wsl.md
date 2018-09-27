# WSL (Bash on Windows)

## SSH

Install:

```bash
sudo apt-get install openssh-server
sudo service ssh start
```

Edit config:

```bash
sudo nano /etc/ssh/sshd_config
```

/etc/ssh/sshd_config:

```text
Port 22
PermitRootLogin no
AllowUsers yourusername
PasswordAuthentication yes
UsePrivilegeSeparation no
```

Restart:

```bash
sudo service ssh --full-restart
```
