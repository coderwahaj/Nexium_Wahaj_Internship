# 📅 Day 12 – GitHub Actions & Vercel CI/CD Integration

## 🔗 Video Watched
**Title**: *CI/CD using GitHub Actions with Vercel*  
**Link**: [Watch on YouTube](https://www.youtube.com/watch?v=gIHBVpJhmEk)

---

## ✅ Tasks Completed

- 📺 Watched the complete tutorial on setting up **GitHub Actions** for **CI/CD** with **Vercel**.
- 🧠 Understood the flow of automated deployment:
  - How Vercel auto-deploys on `git push`.
  - How GitHub Actions can be used to run tests or build tasks before pushing to Vercel.
- ⚙️ Learned how to:
  - Create `.github/workflows` directory.
  - Add a CI/CD workflow YAML file for automation.
  - Configure environment variables securely.
- 🔄 Understood how commits on specific branches (e.g., `main`) can automatically trigger deployments.

---

## 🧪 Key Concepts Learned

- CI/CD pipeline setup using **GitHub Actions**
- Using **Vercel** for automatic deployment
- YAML configuration for GitHub Actions
- Linking GitHub repos with Vercel projects
- Securing environment variables in GitHub & Vercel dashboards

---

## 🔧 Sample `.github/workflows/deploy.yml`

```yaml
name: Deploy to Vercel

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm install
      - run: npm run build
      - run: npm run lint
