# EshwarCVS.github.io

Personal portfolio for **Eshwar Chandra Vidhyasagar Thedla** — Software Engineer III at Walmart Global Tech.

Live site: [https://eshwarcvs.github.io](https://eshwarcvs.github.io)

## What this site shows

- Experience (from `data/linkedin.json`)
- GitHub contribution stats and recent repos
- Featured open-source projects
- Publications and certifications
- Technical writing (Substack / DevDine)
- Community work and interests

Content is refreshed weekly by GitHub Actions (GitHub + Substack live data; experience/profile from `data/linkedin.json`).

## Local development

```bash
cp env.example .env   # optional: REACT_APP_GITHUB_TOKEN for local profile fetch
npm install
python3 scripts/fetch_activity.py
python3 scripts/build_site_data.py
npm start
```

## Updating experience / profile

Edit [`data/linkedin.json`](data/linkedin.json), then commit and push to `master`.  
The deploy workflow builds `public/site-data.json` and publishes to the `gh-pages` branch.

Resume: [Google Drive](https://drive.google.com/file/d/1JcWoYKsWfb_m-L4qim3UCRLgsOb-KuhT/view?usp=sharing)

## CI / deploy

| Workflow | Purpose |
|----------|---------|
| **Secret Scan** | [leash-secrets](https://github.com/FasterApiWeb/leash-secrets) on push/PR |
| **Deploy Website** | Weekly + on push to `master` → fetch activity → build React → deploy `gh-pages` |

Local secret scan:

```bash
bash scripts/secret_scan.sh
```

## Stack

- React (Create React App)
- Python scripts for GitHub / Substack aggregation
- GitHub Pages (`gh-pages` branch)
