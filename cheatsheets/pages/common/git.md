# Git

## Install

### Setup user config

```bash
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
git config --global core.autocrlf input # all line endings to LF
```

## Use

### Remove file from history

```bash
git rm --cached bad_file
git commit --amend -CHEAD
git push
```

## Troubleshooting

### Fix Unicode file names

```bash
git config --global core.quotePath false
```
