# Dynamic Developer Portfolio

A React portfolio that syncs experience, GitHub activity, writing, and community content from config + live APIs. Built for [GitHub Pages](https://pages.github.com/).

**Live example:** [eshwarcvs.github.io](https://eshwarcvs.github.io)

Based on [developerFolio](https://github.com/saadpasta/developerFolio), extended with weekly auto-refresh, Formal/Fun themes, and a single JSON profile source.

---

## Fork this for your own portfolio

Follow these steps end to end. You do **not** need a separate backend.

### 1. Fork and rename the repository

1. Open this repo on GitHub → click **Fork**.
2. Prefer renaming the fork to `YOUR_GITHUB_USERNAME.github.io`  
   (Settings → General → Repository name).  
   That gives you `https://YOUR_GITHUB_USERNAME.github.io` with no custom domain setup.
3. Clone your fork:

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_GITHUB_USERNAME.github.io.git
cd YOUR_GITHUB_USERNAME.github.io
```

If you keep a different repo name, set a custom Pages URL later and update `homepage` in `package.json`.

### 2. Enable GitHub Pages

1. Repo → **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Branch: **`gh-pages`** / `/ (root)` → Save.  
   The first successful **Deploy Website** workflow creates this branch.

### 3. Allow Actions to write to the repo

1. **Settings → Actions → General**.
2. Under **Workflow permissions**, choose **Read and write permissions**.
3. Save.

Without this, deploy cannot push to `gh-pages`.

### 4. Configure Variables and Secrets

Go to **Settings → Secrets and variables → Actions**.

#### Variables (public — use for links and usernames)

| Variable | Required? | Example | Purpose |
|----------|-----------|---------|---------|
| `GITHUB_USERNAME` | Recommended | `octocat` | Whose GitHub stats/activity to fetch |
| `RESUME_URL` | **Recommended** | Drive / PDF URL | Injected into `profile.resume` in `site-data.json` at build time |
| `SUBSTACK_RSS` | Optional | `https://you.substack.com/feed` | Writing section RSS feed |

`REACT_APP_RESUME_URL` is **not** a separate Actions Variable. It is only an optional local `.env` alias for the **same** URL (Create React App requires the `REACT_APP_` prefix to expose env to the browser). Prefer setting **`RESUME_URL` only** — the Python build writes it into site data, and the hero reads `profile.resume`.

#### Secrets (private tokens)

| Secret | Required? | Purpose |
|--------|-----------|---------|
| `GH_STATS_TOKEN` | Recommended | Classic PAT with `read:user` (and `public_repo` if needed) so contribution stats are accurate. Without it, stats often show `0`. |

Create a classic PAT: GitHub → **Settings → Developer settings → Personal access tokens**.  
Paste it as `GH_STATS_TOKEN` (never commit the token).

> **Do not put experience bullets, bio text, or long content in Variables.** Those belong in `data/linkedin.json`.

### 5. Replace your profile content

Edit [`data/linkedin.json`](data/linkedin.json). At minimum update:

- `profile` — name, title, company, email, LinkedIn, website, Substack, `github_username`, tagline, `avatar_url`  
  (**do not** put `resume` here — set Actions Variable `RESUME_URL` instead; the build injects it)
- `experience` — roles, periods, locations, `highlights` (bullet list; shown in collapsible cards on the site)
- `education`, `skills`, `papers`, `certifications`
- `featured_repos`, `community`, `interests`, `learning_journal`
- `exclude_repos` — repos to hide from featured lists

This file is the **source of truth** for almost all portfolio copy.

### 6. Update site metadata and package homepage

1. [`public/index.html`](public/index.html) — `<title>`, meta description, Open Graph / Twitter tags.
2. [`package.json`](package.json) — `"homepage": "https://YOUR_GITHUB_USERNAME.github.io/"`.
3. Optional fallbacks in [`src/portfolio.js`](src/portfolio.js) — greeting text and social links (used if `site-data.json` is missing).

### 7. Local preview (optional but recommended)

Needs Node 18+ and Python 3.10+.

```bash
cp env.example .env
# Edit .env: GITHUB_USERNAME, RESUME_URL, SUBSTACK_RSS, and a PAT if you want live stats

npm install
export GITHUB_TOKEN=ghp_your_pat   # same scopes as GH_STATS_TOKEN
export GITHUB_USERNAME=YOUR_GITHUB_USERNAME
python3 scripts/fetch_activity.py
python3 scripts/build_site_data.py
npm start
```

Open [http://localhost:3000](http://localhost:3000).

### 8. Deploy

```bash
git add .
git commit -m "Customize portfolio for my profile"
git push origin master
```

Or run **Actions → Deploy Website → Run workflow**.

The workflow:

1. Scans for leaked secrets ([leash-secrets](https://github.com/FasterApiWeb/leash-secrets))
2. Fetches GitHub + Substack activity
3. Builds `public/site-data.json` from `data/linkedin.json` + activity
4. Builds the React app
5. Publishes to the `gh-pages` branch

After a few minutes, visit `https://YOUR_GITHUB_USERNAME.github.io`.

### 9. Keep content fresh

| Trigger | When |
|---------|------|
| Push to `master` | Every content/code change |
| Schedule | Weekly (Sunday 06:15 UTC) |
| Manual | Actions → Deploy Website → Run workflow |

To change experience later: edit `data/linkedin.json` → commit → push.

To change resume: update Variable `RESUME_URL` → re-run deploy (it is written into `site-data.json` as `profile.resume`).

---

## What belongs where?

| Kind of data | Put it in | Why |
|--------------|-----------|-----|
| Name, bio, experience, skills, papers | `data/linkedin.json` | Structured content; versioned with the site |
| Resume URL | **Actions Variable `RESUME_URL`** (or `.env` locally) | Injected into profile at build; easy to rotate |
| GitHub username, Substack RSS | **Actions Variables** | Same |
| GitHub PAT for stats | **Actions Secret** `GH_STATS_TOKEN` | Private credential |
| Page title / SEO | `public/index.html` | Static HTML head |
| Theme colors / layout | `src/containers/Main.scss`, `dynamic.scss` | Design system |

### Resume: `RESUME_URL` vs `REACT_APP_RESUME_URL`

| Name | Where | Needed? |
|------|-------|---------|
| `RESUME_URL` | Actions Variable / `.env` / CI | **Yes** — canonical |
| `REACT_APP_RESUME_URL` | Local `.env` only (optional) | No — same URL, CRA naming alias |

Do **not** create both as Actions Variables. One Variable named `RESUME_URL` is enough.

### Good candidates for Variables

Already wired:

- `GITHUB_USERNAME`
- `RESUME_URL`
- `SUBSTACK_RSS`

Reasonable to add later if you want zero hardcoding in workflows:

- Default Formal/Fun mode
- Contact email (if you prefer not to commit it — note: it still ends up in the public site HTML)
- Custom domain / homepage URL

### Keep out of Variables

- Full experience / education / publications (too large; use JSON)
- Tokens and private keys (use **Secrets**)
- Anything you would not want visible in the Actions UI (Variables are readable by anyone with repo access)

---

## Local development (short)

```bash
cp env.example .env
npm install
python3 scripts/fetch_activity.py
python3 scripts/build_site_data.py
npm start
```

Local secret scan (same tool as CI):

```bash
bash scripts/secret_scan.sh
```

---

## CI / deploy

| Workflow | Purpose |
|----------|---------|
| **Secret Scan** | [leash-secrets](https://github.com/FasterApiWeb/leash-secrets) on push/PR |
| **Deploy Website** | Weekly + push to `master` + manual → fetch → build → `gh-pages` |

---

## Stack

- React (Create React App / developerFolio base)
- Python scripts for GitHub GraphQL + Substack RSS
- GitHub Actions → GitHub Pages (`gh-pages`)

---

## License / attribution

Portfolio content is yours after you fork and replace `data/linkedin.json`.  
UI foundation credits [developerFolio](https://github.com/saadpasta/developerFolio).
