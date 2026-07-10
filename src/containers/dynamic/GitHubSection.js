import React from "react";
import {Fade} from "react-reveal";
import {useSiteData} from "../../contexts/SiteDataContext";
import SectionShell from "./SectionShell";

const STAT_LABELS = [
  ["total_contributions_ytd", "Contributions"],
  ["commits_ytd", "Commits"],
  ["prs_ytd", "Pull Requests"],
  ["reviews_ytd", "Reviews"]
];

function ContributionHeatmap({calendar}) {
  const weeks = calendar?.weeks || [];
  if (!weeks.length) return null;

  return (
    <div className="heatmap-wrap">
      <div className="heatmap">
        {weeks.map((week, wi) => (
          <div key={wi} className="heatmap-week">
            {week.contributionDays?.map((day, di) => (
              <span
                key={`${wi}-${di}`}
                className="heatmap-cell"
                style={{
                  backgroundColor: day.color || "var(--surface-3)",
                  opacity: day.contributionCount ? 1 : 0.35
                }}
                title={`${day.date}: ${day.contributionCount} contributions`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function GitHubSection() {
  const {data} = useSiteData();
  const stats = data?.github?.stats || {};
  const username = data?.github_username || "EshwarCVS";
  const calendar = data?.github?.contribution_calendar;

  return (
    <Fade bottom duration={800} distance="24px">
      <SectionShell
        id="github"
        number="02"
        label="GitHub"
        title="Open source pulse"
        subtitle="Live contribution stats — refreshed weekly from GitHub."
        terminal={`$ gh contribution-stats --user ${username} --ytd`}
      >
        <div className="stats-grid">
          {STAT_LABELS.map(([key, label]) => (
            <div key={key} className="stat-card">
              <span className="stat-value">{stats[key] ?? "—"}</span>
              <span className="stat-label">{label}</span>
            </div>
          ))}
        </div>
        <ContributionHeatmap calendar={calendar} />
        <div className="github-links">
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            View GitHub profile ↗
          </a>
        </div>
      </SectionShell>
    </Fade>
  );
}
