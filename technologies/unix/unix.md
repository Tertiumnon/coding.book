# UNIX

## Recipes

### Disable passwords for sudoers

Edit:

```bash
sudo visudo
```

Add to the end:

```bash
$USER ALL=(ALL) NOPASSWD: ALL
```
