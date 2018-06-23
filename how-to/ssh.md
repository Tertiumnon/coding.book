# SSH

## SSH-key generation

```Bash
ssh-keygen -t rsa -b 4096 -N '' -C "tertiumnon@gmail.com" -f ~/.ssh/id_rsa
```

## SSH-keys permissions

```Bash
chmod 700 ~/.ssh
chmod 644 ~/.ssh/authorized_keys
chmod 644 ~/.ssh/known_hosts
chmod 644 ~/.ssh/config
chmod 600 ~/.ssh/id_rsa
chmod 644 ~/.ssh/id_rsa.pub
```

## SSH-agent

```Bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa
```
