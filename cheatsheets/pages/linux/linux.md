# UNIX

## Sudo

### Run sudo-command without entering a password

Edit:

```bash
sudo visudo
```

Paste to the end of file:

```text
{{username}} ALL=(ALL) NOPASSWD: ALL
```
