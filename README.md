# Portfolio

A minimal Next.js starter for a Computer Engineering portfolio.

## Local development

Use Node.js 24.x. In PowerShell, run:

```powershell
npm.cmd install
npm.cmd run dev
```

Open http://localhost:3000. Edit `app/page.js` for the homepage and
`app/globals.css` for its styles.

## Verify the production build

```powershell
npm.cmd run build
```

## Connect GitHub and Vercel

1. Create an empty GitHub repository named `portfolio`.
2. Push this project's source files to that repository. Keep `node_modules`,
   `.next`, `.npm-cache`, `.vercel`, and environment files out of Git.
3. Open https://vercel.com/new and connect your GitHub account.
4. Grant Vercel access to the portfolio repository, then import it.
5. Use the Next.js framework preset and the repository root (`./`). Leave
   the install command, build command, and output directory at their defaults.
   No environment variables are needed for this starter.
6. Click Deploy. Vercel provides the deployed site's URL when the build succeeds.

Later pushes to the production branch trigger production deployments.

Official guide: https://vercel.com/docs/git/vercel-for-github

## Optional: link this local folder with Vercel CLI

After the project exists in Vercel:

```powershell
npx.cmd vercel login
npx.cmd vercel link
```

Complete sign-in in your browser. In the link prompts, select your account,
choose the existing Vercel portfolio project, and use the current directory.
Linking creates local `.vercel` configuration, which is ignored by Git.

Official guide: https://vercel.com/docs/cli/link
