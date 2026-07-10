import React from "react";
import {Fade} from "react-reveal";
import {useSiteData} from "../../contexts/SiteDataContext";
import SectionShell from "./SectionShell";

function formatDate(raw) {
  if (!raw) return "";
  const d = new Date(raw);
  if (!isNaN(d)) {
    return d.toLocaleDateString("en-US", {month: "short", year: "numeric"});
  }
  return raw;
}

export default function WritingSection() {
  const {data} = useSiteData();
  const posts = data?.substack || [];
  const journal = data?.learning_journal;

  if (!posts.length && !journal?.url) return null;

  return (
    <Fade bottom duration={800} distance="24px">
      <SectionShell
        id="writing"
        number="05"
        label="Writing"
        title="Technical writing"
        subtitle="DevDine on Substack — engineering, security, and AI tooling."
        terminal="$ ls -lt ~/writing"
      >
        {journal?.url && (
          <a href={journal.url} target="_blank" rel="noreferrer" className="journal-card">
            <span className="journal-label">Learn what I learn</span>
            <h3>{journal.name}</h3>
            <p>{journal.description}</p>
          </a>
        )}
        <div className="writing-grid">
          {posts.map(post => (
            <a
              key={post.url || post.title}
              href={post.url}
              target="_blank"
              rel="noreferrer"
              className="writing-card"
            >
              <time>{formatDate(post.published)}</time>
              <h3>{post.title}</h3>
              {post.summary && <p>{post.summary}</p>}
            </a>
          ))}
        </div>
      </SectionShell>
    </Fade>
  );
}
