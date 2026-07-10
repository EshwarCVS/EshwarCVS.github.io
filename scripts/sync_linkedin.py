"""Pull linkedin.json from EshwarCVS profile repo (single source of truth)."""

import os
import urllib.request
from pathlib import Path

PROFILE_REPO = os.getenv("PROFILE_REPO", "EshwarCVS/EshwarCVS")
PROFILE_BRANCH = os.getenv("PROFILE_BRANCH", "master")
OUT_PATH = Path(os.getenv("LINKEDIN_DATA_PATH", "data/linkedin.json"))


def sync_linkedin() -> None:
    url = (
        f"https://raw.githubusercontent.com/{PROFILE_REPO}/"
        f"{PROFILE_BRANCH}/data/linkedin.json"
    )
    req = urllib.request.Request(url, headers={"User-Agent": "portfolio-sync"})
    with urllib.request.urlopen(req, timeout=30) as resp:
        content = resp.read().decode()
    OUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUT_PATH.write_text(content)
    print(f"Synced {OUT_PATH} from {url}")


if __name__ == "__main__":
    sync_linkedin()
