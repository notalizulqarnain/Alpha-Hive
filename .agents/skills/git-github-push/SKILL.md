---
name: git-github-push
description: >-
  Reliable, non-interactive workflow to initialize, authenticate, and push Git repositories
  to GitHub without credential dialog hangs or large-file HTTP buffer errors.
  Use when creating repos, authenticating to GitHub, pushing code, or debugging git push failures.
---

# Git GitHub Push & Sync Guide

Follow this guide whenever initializing a new Git repository, connecting an existing project to GitHub, or troubleshooting `git push` failures in an agent terminal.

## Pre-Push Checklist (Avoid Broken Pipe & Bloat)

1. **Verify `.gitignore` First**:
   Ensure all build artifacts, temporary caches, and node dependencies are excluded before running `git add`:
   ```gitignore
   node_modules/
   .next/
   .vercel/
   dist/
   build/
   out/
   .env*.local
   .env
   *.log
   ```

2. **Check Repository Size & Staged Binaries**:
   ```bash
   git status
   ```
   If large build folders were accidentally tracked, unstage them:
   ```bash
   git rm -r --cached .next .vercel node_modules
   ```

## Standard Non-Interactive Push Workflow

### 1. Initialize & Stage
```bash
git init
git add .
git commit -m "feat: initial commit"
git branch -M main
```

### 2. Configure Authenticated Remote with Token
When working in automated or headless shells where interactive web logins do not trigger:
```bash
git remote add origin https://<github-username>:<personal-access-token>@github.com/<owner>/<repo>.git
```
*(If the remote already exists, update it with `git remote set-url origin https://<github-username>:<personal-access-token>@github.com/<owner>/<repo>.git`)*

### 3. Increase HTTP Post Buffer (For Medium/Large Repos)
```bash
git config http.postBuffer 524288000
```

### 4. Push with Upstream Tracking
```bash
git push -u origin main
```

## Troubleshooting Common Errors

### Error: `fatal: the remote end hung up unexpectedly` / `broken pipe`
* **Cause**: Git repository history contains huge files (e.g., hundreds of MBs in `.next/cache` or `node_modules`).
* **Fix**:
  1. Delete `.next` and `.vercel` directories locally.
  2. Remove `.git` and run `git init` fresh with a clean `.gitignore`.
  3. Re-commit and push.

### Error: `fatal: could not read Username` / Authentication Failed
* **Fix**: Ensure your GitHub Classic Personal Access Token has the `repo` scope enabled and use the token format embedded directly in the remote URL.
