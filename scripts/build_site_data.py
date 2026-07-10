"""Build public/site-data.json for the React portfolio from activity + profile data."""

import json
from pathlib import Path


def build_site_data(activity: dict) -> dict:
    linkedin = activity.get("linkedin", {})
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
    if not activity_path.exists():
        print("No activity data. Run fetch_activity.py first.")
        exit(1)

    activity = json.loads(activity_path.read_text())
    site_data = build_site_data(activity)
    out = Path("public/site-data.json")
    out.parent.mkdir(exist_ok=True)
    out.write_text(json.dumps(site_data, indent=2))
    print(f"Wrote {out}")
