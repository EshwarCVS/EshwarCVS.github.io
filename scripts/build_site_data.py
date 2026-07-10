"""Build public/site-data.json for the React portfolio from activity + profile data."""

import json
from pathlib import Path


def load_json(path: Path) -> dict:
    if not path.exists():
        return {}
    return json.loads(path.read_text())


def build_site_data(activity: dict, linkedin: dict | None = None) -> dict:
    # Prefer data/linkedin.json so profile edits are never stuck behind a stale activity snapshot
    linkedin = linkedin if linkedin is not None else activity.get("linkedin", {})
    profile = dict(linkedin.get("profile", {}))
    github = activity.get("github", {})
    if github.get("avatar_url") and not profile.get("avatar_url"):
        profile["avatar_url"] = github["avatar_url"]

    return {
        "generated_at": activity.get("generated_at"),
        "github_username": activity.get("github_username", profile.get("github_username", "EshwarCVS")),
        "profile": profile,
        "experience": linkedin.get("experience", []),
        "education": linkedin.get("education", []),
        "skills": linkedin.get("skills", []),
        "papers": linkedin.get("papers", []),
        "certifications": linkedin.get("certifications", []),
        "featured_repos": linkedin.get("featured_repos", []),
        "learning_journal": linkedin.get("learning_journal", {}),
        "community": linkedin.get("community", []),
        "interests": linkedin.get("interests", []),
        "github": {
            "stats": github.get("stats", {}),
            "contribution_calendar": github.get("contribution_calendar", {}),
            "recent_events": github.get("recent_events", []),
            "recent_prs": github.get("recent_prs", []),
            "own_repos": github.get("own_repos", []),
        },
        "substack": activity.get("substack", []),
    }


if __name__ == "__main__":
    activity_path = Path("data/activity.json")
    linkedin_path = Path("data/linkedin.json")

    activity = load_json(activity_path)
    if not activity:
        print("No activity data. Run fetch_activity.py first (or keep an existing data/activity.json).")
        exit(1)

    linkedin = load_json(linkedin_path) or activity.get("linkedin", {})
    site_data = build_site_data(activity, linkedin)
    out = Path("public/site-data.json")
    out.parent.mkdir(exist_ok=True)
    out.write_text(json.dumps(site_data, indent=2))
    print(f"Wrote {out} ({len(site_data.get('experience', []))} experience roles)")
