# UNIX

## Recipes

### Run sudo-command without entering a password

Edit:

```bash
sudo visudo
```

Add to the end:

```bash
{{username}} ALL=(ALL) NOPASSWD: ALL
```
