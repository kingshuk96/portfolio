# Kingshuk Sanyal — Portfolio

A single-page portfolio site (plain HTML/CSS/JS, no build step needed).

## Deploy to Vercel

**Option A — Vercel website (no CLI, easiest)**
1. Go to https://vercel.com and sign in (GitHub, GitLab, or email).
2. Click **Add New… → Project**.
3. Choose **"Deploy without Git"** or drag-and-drop this whole folder onto the upload area, OR push this folder to a new GitHub repo and import it from there.
4. Framework preset: choose **"Other"** (it's static HTML — Vercel will detect it automatically).
5. Click **Deploy**. You'll get a live URL like `https://your-project.vercel.app` in under a minute.

**Option B — Vercel CLI**
```bash
npm install -g vercel
cd portfolio
vercel        # first deploy, follow prompts
vercel --prod # promote to production URL
```

**Option C — GitHub + auto-deploy (recommended for future edits)**
1. Create a new repo on GitHub and push this folder to it.
2. In Vercel, click **Add New… → Project → Import Git Repository**, pick the repo.
3. Every push to `main` will auto-redeploy.

## Custom domain
In your Vercel project → **Settings → Domains**, add your own domain (e.g. `kingshuksanyal.dev`) and follow the DNS instructions shown.

## Editing content
- All text lives in `index.html`.
- Colors, fonts, spacing live in `style.css` (see the `:root` variables at the top).
- Your resume PDF is at `assets/Kingshuk_Sanyal_Resume.pdf` — replace it with an updated version any time (keep the same filename, or update the `href` in the "./resume.pdf" link in `index.html`).
