import React from "react";
import {Fade} from "react-reveal";
import {useSiteData} from "../../contexts/SiteDataContext";
import SectionShell from "./SectionShell";

export default function PublicationsSection() {
  const {data} = useSiteData();
  const papers = data?.papers || [];
  const certs = data?.certifications || [];

  if (!papers.length && !certs.length) return null;

  return (
    <Fade bottom duration={800} distance="24px">
      <SectionShell
        id="publications"
        number="04"
        label="Research"
        title="Publications & credentials"
        subtitle="Peer-reviewed work and professional certifications."
      >
        {papers.length > 0 && (
          <div className="pub-list">
            <h3 className="pub-heading">Publications</h3>
            {papers.map(paper => (
              <article key={paper.title} className="pub-card">
                {paper.url ? (
                  <a href={paper.url} target="_blank" rel="noreferrer" className="pub-title">
                    {paper.title}
                  </a>
                ) : (
                  <h4 className="pub-title">{paper.title}</h4>
                )}
                <p className="pub-meta">
                  {paper.venue}
                  {paper.year ? ` · ${paper.year}` : ""}
                </p>
              </article>
            ))}
          </div>
        )}
        {certs.length > 0 && (
          <div className="cert-grid">
            <h3 className="pub-heading">Certifications</h3>
            {certs.slice(0, 6).map(cert => (
              <div key={cert.name} className="cert-chip">
                {cert.url ? (
                  <a href={cert.url} target="_blank" rel="noreferrer">
                    {cert.name}
                  </a>
                ) : (
                  cert.name
                )}
                <span>
                  {cert.issuer}
                  {cert.year ? ` · ${cert.year}` : ""}
                </span>
              </div>
            ))}
          </div>
        )}
      </SectionShell>
    </Fade>
  );
}
