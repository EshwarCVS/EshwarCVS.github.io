import React, {useState} from "react";
import {useSiteData} from "../../contexts/SiteDataContext";
import SectionShell from "./SectionShell";
import walmartLogo from "../../assets/images/walmartLogo.svg";
import uwmLogo from "../../assets/images/uwmLogo.png";
import amazonLogo from "../../assets/images/amazonLogo.png";
import deloitteLogo from "../../assets/images/deloitteLogo.png";
import ncsuLogo from "../../assets/images/ncsuLogo.jpeg";

const COMPANY_LOGOS = {
  "Walmart Global Tech": walmartLogo,
  "United Wholesale Mortgage": uwmLogo,
  Amazon: amazonLogo,
  "Deloitte India (Offices of the US)": deloitteLogo,
  "Deloitte India": deloitteLogo,
  Deloitte: deloitteLogo,
  "NC State Department of Biological and Agricultural Engineering": ncsuLogo,
  "North Carolina State University": ncsuLogo
};

function companyInitials(company) {
  return (company || "?")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map(w => w[0])
    .join("")
    .toUpperCase();
}

function companyLogo(company) {
  return COMPANY_LOGOS[company] || null;
}

export default function ExperienceSection() {
  const {data} = useSiteData();
  const experience = data?.experience || [];
  // Start collapsed so mobile shows a scannable list of roles first
  const [openIndex, setOpenIndex] = useState(null);

  if (!experience.length) return null;

  const toggle = index => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <SectionShell
      id="experience"
      number="01"
      label="Experience"
      title="Where I've built"
      terminal="$ cat experience.json | jq '.roles[]'"
    >
      <div className="timeline">
        {experience.map((exp, i) => {
          const logo = companyLogo(exp.company);
          const highlights = exp.highlights || [];
          const hasBody = highlights.length > 0 || Boolean(exp.description);
          const isOpen = openIndex === i;
          const panelId = `experience-panel-${i}`;
          const buttonId = `experience-toggle-${i}`;

          return (
            <article
              key={`${exp.company}-${exp.role}-${i}`}
              className={`timeline-card${isOpen ? " is-open" : ""}`}
            >
              <div className="timeline-marker">{String(i + 1).padStart(2, "0")}</div>
              <div className="timeline-content">
                <button
                  type="button"
                  id={buttonId}
                  className="timeline-toggle"
                  aria-expanded={isOpen}
                  aria-controls={hasBody ? panelId : undefined}
                  onClick={() => hasBody && toggle(i)}
                  disabled={!hasBody}
                >
                  <div className="timeline-head">
                    {logo ? (
                      <img src={logo} alt="" className="timeline-logo" />
                    ) : (
                      <div className="timeline-initials" aria-hidden="true">
                        {companyInitials(exp.company)}
                      </div>
                    )}
                    <div className="timeline-head-text">
                      <h3>{exp.role}</h3>
                      <p className="timeline-company">
                        {exp.company}
                        {exp.employment_type ? ` · ${exp.employment_type}` : ""}
                        {" · "}
                        <em>{exp.period}</em>
                      </p>
                      {exp.location && (
                        <p className="timeline-location">{exp.location}</p>
                      )}
                    </div>
                    {hasBody && (
                      <span className="timeline-chevron" aria-hidden="true">
                        {isOpen ? "−" : "+"}
                      </span>
                    )}
                  </div>
                </button>

                {hasBody && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`timeline-panel${isOpen ? " is-open" : ""}`}
                    hidden={!isOpen}
                  >
                    {highlights.length > 0 ? (
                      <ul className="timeline-highlights">
                        {highlights.map(item => (
                          <li key={item.slice(0, 48)}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      exp.description && (
                        <p className="timeline-desc">{exp.description}</p>
                      )
                    )}
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
}
