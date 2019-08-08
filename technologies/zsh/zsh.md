# ZSH

## Install

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

## ZSH plugins

### ZSH enable SSH agent

Edit .zshrc:

```text
plugins=(... ssh-agent)
```

IMPORTANT: put these settings before the line that sources oh-my-zsh:

```text
zstyle :omz:plugins:ssh-agent identities id_rsa id_rsa2 id_github
```

### ZSH plugin for Visual Studio Code

Edit:

```bash
# ~/.zshrc
plugins=(
  vscode
)
```

Run:

```bash
# code .
vsc
```

[zsh-vscode](https://github.com/robbyrussell/oh-my-zsh/tree/master/plugins/vscode)

### ZSH plugin for NVM

```bash
git clone https://github.com/lukechilds/zsh-nvm ~/.oh-my-zsh/custom/plugins/zsh-nvm
```

[zsh-nvm](https://github.com/lukechilds/zsh-nvm)

## ZSH and UTF-8

Edit:

```bash
export LC_ALL=en_US.UTF-8
export LANG=en_US.UTF-8
```
