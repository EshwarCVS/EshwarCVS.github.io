import React from "react";
import {Fade} from "react-reveal";
import {useSiteData} from "../../contexts/SiteDataContext";
import SectionShell from "./SectionShell";

function renderMdLinks(text) {
  if (!text) return null;
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (match) {
      return (
        <a key={i} href={match[2]} target="_blank" rel="noreferrer">
          {match[1]}
        </a>
      );
    }
    return part;
  });
}

export default function CommunitySection() {
  const {data} = useSiteData();
  const items = data?.community || [];

  if (!items.length) return null;

  return (
    <Fade bottom duration={800} distance="24px">
      <SectionShell
        id="community"
        number="07"
        label="Community"
        title="Giving back"
        subtitle="Mentorship, resume reviews, and hiring advocacy."
      >
        <div className="community-grid">
          {items.map(item => (
            <article key={item.title} className="community-card">
              <div className="community-icon">{item.icon || "🤝"}</div>
              <h3>
                {item.url ? (
                  <a href={item.url} target="_blank" rel="noreferrer">
                    {item.title}
                  </a>
                ) : (
                  item.title
                )}
              </h3>
              {item.period && <p className="community-period">{item.period}</p>}
              <p>{item.description}</p>
              {item.cta && (
                <p className="community-cta">{renderMdLinks(item.cta)}</p>
              )}
            </article>
          ))}
        </div>
      </SectionShell>
    </Fade>
  );
}
