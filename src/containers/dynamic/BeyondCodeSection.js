import React from "react";
import {Fade} from "react-reveal";
import {useSiteData} from "../../contexts/SiteDataContext";
import SectionShell from "./SectionShell";

export default function BeyondCodeSection() {
  const {data} = useSiteData();
  const interests = data?.interests || [];

  if (!interests.length) return null;

  return (
    <Fade bottom duration={800} distance="24px">
      <SectionShell
        id="beyond"
        number="08"
        label="Beyond code"
        title="Life outside the IDE"
        subtitle="Cooking, fitness, reading, and creative outlets."
      >
        <div className="beyond-grid">
          {interests.map(item => (
            <a
              key={item.label}
              href={item.url || "#"}
              target={item.url ? "_blank" : undefined}
              rel={item.url ? "noreferrer" : undefined}
              className="beyond-card"
            >
              <span className="beyond-icon">{item.icon}</span>
              <h3>{item.label}</h3>
              <p>{item.description}</p>
            </a>
          ))}
        </div>
      </SectionShell>
    </Fade>
  );
}
