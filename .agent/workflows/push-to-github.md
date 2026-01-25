---
description: Push code to GitHub repository (cognera-landing-page)
---

# Push to GitHub Repository

This workflow automates pushing your cognera website code to GitHub.

## Prerequisites
- Ensure you have GitHub credentials (username and Personal Access Token)
- If you don't have a PAT, create one at: https://github.com/settings/tokens

## Steps

// turbo-all

1. **Check current git status**
   ```bash
   git status
   ```

2. **Check and remove existing remote (if any)**
   ```bash
   git remote -v
   git remote remove origin
   ```

3. **Add new remote repository**
   ```bash
   git remote add origin https://github.com/Raahul-bale/cognera-landing-page.git
   ```

4. **Stage all changes**
   ```bash
   git add -A
   ```

5. **Commit changes**
   ```bash
   git commit -m "Initial commit - Cognera landing page"
   ```

6. **Ensure branch is named 'main'**
   ```bash
   git branch -M main
   ```

7. **Push to GitHub**
   ```bash
   git push -u origin main
   ```
   
   > **Note:** If prompted for credentials:
   > - Username: Your GitHub username (Raahul-bale)
   > - Password: Use your Personal Access Token (NOT your GitHub password)

## Verification

After pushing, visit: https://github.com/Raahul-bale/cognera-landing-page

Your code should now be visible on GitHub!
