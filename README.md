# Josie Lau — personal academic website

Static Next.js site designed for GitHub Pages. The included workflow supports both a
`username.github.io` root site and a project site at `username.github.io/repository-name/`.

## Local development

```bash
npm install
npm run dev
```

Run `npm run build` to create the deployable static site in `out/`. Before publishing, replace the placeholder CV and profile URLs in `data/site.ts` with Josie’s final files and public links.

## Publish with GitHub Pages

1. Create a new GitHub repository. Use `username.github.io` for a root personal site, or any repository name for a project site.
2. From this folder, initialise Git and push the project to the repository’s `main` branch:

   ```bash
   git init
   git add .
   git commit -m "Prepare site for GitHub Pages"
   git branch -M main
   git remote add origin https://github.com/USERNAME/REPOSITORY.git
   git push -u origin main
   ```

3. In GitHub, open **Settings → Pages** and set **Source** to **GitHub Actions**.
4. Open the **Actions** tab and wait for **Deploy to GitHub Pages** to finish. GitHub will show the live URL in the workflow run and under **Settings → Pages**.

The workflow in `.github/workflows/deploy.yml` builds the static `out/` directory and automatically configures the correct repository path for internal links.
