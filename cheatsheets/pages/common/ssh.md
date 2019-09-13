# SSH

## Imstall

### Setup SSH directories and files permissions

```bash
chmod 700 ~/.ssh
chmod 644 ~/.ssh/authorized_keys
chmod 644 ~/.ssh/known_hosts
chmod 644 ~/.ssh/config
chmod 600 ~/.ssh/id_rsa
chmod 644 ~/.ssh/id_rsa.pub
```

### Create SSH aliases

Add next lines to ~/.ssh/config:

```text
Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/my_ssh_key
```

Use:

```bash
git clone git@github.com:your-user/your-project.git
```

## Use

### Generate SSH key

```bash
ssh-keygen -t rsa -b 4096 -N '' -C "your@mail.com" -f ~/.ssh/id_rsa
```

### Use SSH agent

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa
```
