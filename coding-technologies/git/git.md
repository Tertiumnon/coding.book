# Git

## Congiguration

```bash
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
git config --global core.autocrlf input # all line endings to LF
```

## Recipes

### Remove file from history

```bash
git rm --cached bad_file
git commit --amend -CHEAD
git push -f
```

## Solving problems

### Unicode file names

```bash
git config --global core.quotePath false
```
