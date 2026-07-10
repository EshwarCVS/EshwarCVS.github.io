import React from "react";
import {Fade} from "react-reveal";
import {useSiteData} from "../../contexts/SiteDataContext";
import SectionShell from "./SectionShell";

const LANG_COLORS = {
  Python: "#3776AB",
  JavaScript: "#F7DF1E",
  Java: "#007396",
  Scala: "#DC322F"
};

export default function ProjectsSection() {
  const {data} = useSiteData();
  const projects = data?.featured_repos || [];

  if (!projects.length) return null;

  return (
    <Fade bottom duration={800} distance="24px">
      <SectionShell
        id="projects"
        number="03"
        label="Projects"
        title="Featured work"
        subtitle="Open source and side projects — scored and ranked from your profile repo."
        terminal="$ git log --author=eshwar --oneline -n 3"
      >
        <div className="project-grid">
          {projects.map((repo, i) => {
            const lang = repo.language || "";
            const langColor = LANG_COLORS[lang] || "#555";
            return (
              <a
                key={repo.url || repo.name}
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                className="project-card"
              >
                <div className="project-card-top">
                  <span className="project-index">{String(i + 1).padStart(2, "0")}</span>
                  {lang && (
                    <span
                      className="project-lang"
                      style={{borderColor: langColor, color: langColor}}
                    >
                      {lang}
                    </span>
                  )}
                </div>
                <h3>{repo.name}</h3>
                <p className="project-org">{repo.org}</p>
                <p className="project-desc">{repo.description}</p>
                {repo.highlight && (
                  <p className="project-highlight">{repo.highlight}</p>
                )}
                {repo.npm && (
                  <span className="project-npm">npm: {repo.npm}</span>
                )}
              </a>
            );
          })}
        </div>
      </SectionShell>
    </Fade>
  );
}
