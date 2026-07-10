import React from "react";
import {Fade} from "react-reveal";
import {useSiteData} from "../../contexts/SiteDataContext";
import SectionShell from "./SectionShell";

const EXCLUDED = new Set(["eshwarcvs/eshwarcvs", "eshwarcvs/eshwarcvs.github.io"]);

export default function ActivitySection() {
  const {data} = useSiteData();
  const events = data?.github?.recent_events || [];
  const repos = [];
  const seen = new Set();

  for (const evt of events) {
    const full = evt.repo || "";
    const key = full.toLowerCase();
    if (!full || EXCLUDED.has(key) || seen.has(key)) continue;
    seen.add(key);
    repos.push({
      name: full.split("/").pop(),
      full,
      url: `https://github.com/${full}`
    });
    if (repos.length >= 3) break;
  }

  if (!repos.length) return null;

  return (
    <Fade bottom duration={800} distance="24px">
      <SectionShell
        id="activity"
        number="06"
        label="Activity"
        title="Recent GitHub activity"
        terminal="$ gh api user/events --jq '.[].repo.name' | uniq | head -3"
      >
        <ul className="activity-feed">
          {repos.map(repo => (
            <li key={repo.full}>
              <a href={repo.url} target="_blank" rel="noreferrer">
                {repo.name}
              </a>
            </li>
          ))}
        </ul>
      </SectionShell>
    </Fade>
  );
}
