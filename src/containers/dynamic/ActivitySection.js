import React from "react";
import {Fade} from "react-reveal";
import {useSiteData} from "../../contexts/SiteDataContext";
import SectionShell from "./SectionShell";

const EXCLUDED = new Set(["eshwarcvs/eshwarcvs", "eshwarcvs/eshwarcvs.github.io"]);

function eventLine(evt) {
  const type = evt.type;
  const repo = (evt.repo || "").split("/").pop();
  if (type === "PushEvent" && evt.commits?.length) {
    return `Pushed to ${repo}: ${evt.commits[0]}`;
  }
  if (type === "PullRequestEvent") {
    return `${evt.action || "Updated"} PR in ${repo}: ${evt.title || ""}`;
  }
  if (type === "PullRequestReviewEvent") {
    return `Reviewed PR in ${repo}: ${evt.pr_title || ""}`;
  }
  if (type === "IssueCommentEvent") {
    return `Commented on ${repo}: ${evt.issue_title || ""}`;
  }
  return null;
}

export default function ActivitySection() {
  const {data} = useSiteData();
  const events = data?.github?.recent_events || [];
  const lines = [];
  const seen = new Set();

  for (const evt of events) {
    const repoKey = (evt.repo || "").toLowerCase();
    if (EXCLUDED.has(repoKey)) continue;
    const line = eventLine(evt);
    if (line && !seen.has(line)) {
      seen.add(line);
      lines.push(line);
    }
    if (lines.length >= 8) break;
  }

  if (!lines.length) return null;

  return (
    <Fade bottom duration={800} distance="24px">
      <SectionShell
        id="activity"
        number="06"
        label="Activity"
        title="Recent GitHub activity"
        subtitle="What I've been shipping lately."
        terminal="$ gh api user/events --per-page 8"
      >
        <ul className="activity-feed">
          {lines.map(line => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </SectionShell>
    </Fade>
  );
}
