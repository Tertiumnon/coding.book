# SSH

## SSH key generation

```bash
ssh-keygen -t rsa -b 4096 -N '' -C "your@mail.com" -f ~/.ssh/id_rsa
```

## SSH keys permissions

```bash
chmod 700 ~/.ssh
chmod 644 ~/.ssh/authorized_keys
chmod 644 ~/.ssh/known_hosts
chmod 644 ~/.ssh/config
chmod 600 ~/.ssh/id_rsa
chmod 644 ~/.ssh/id_rsa.pub
```

## SSH agent

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa
```

## Autoloading SSH keys

```bash
# ~/.ssh/config
Host *
  UseKeychain yes
  AddKeysToAgent yes
  IdentityFile ~/.ssh/ssh_key_1
  IdentityFile ~/.ssh/ssh_key_2
```