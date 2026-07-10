import React from "react";
import {Fade} from "react-reveal";
import {useSiteData} from "../../contexts/SiteDataContext";
import SectionShell from "./SectionShell";

const COMPANY_LOGOS = {
  "United Wholesale Mortgage": require("../../assets/images/uwmLogo.png"),
  Amazon: require("../../assets/images/amazonLogo.png"),
  "Deloitte India": require("../../assets/images/deloitteLogo.png"),
  Deloitte: require("../../assets/images/deloitteLogo.png"),
  "NC State Dept. of Biological & Agricultural Engineering": require("../../assets/images/ncsuLogo.jpeg")
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

  if (!experience.length) return null;

  return (
    <Fade bottom duration={800} distance="24px">
      <SectionShell
        id="experience"
        number="01"
        label="Experience"
        title="Where I've built"
        subtitle="Roles across retail data platforms, fintech microservices, and e-commerce at scale."
        terminal="$ cat experience.json | jq '.roles[]'"
      >
        <div className="timeline">
          {experience.map((exp, i) => {
            const logo = companyLogo(exp.company);
            return (
              <article key={`${exp.company}-${i}`} className="timeline-card">
                <div className="timeline-marker">{String(i + 1).padStart(2, "0")}</div>
                <div className="timeline-content">
                  <div className="timeline-head">
                    {logo ? (
                      <img src={logo} alt="" className="timeline-logo" />
                    ) : (
                      <div className="timeline-initials" aria-hidden="true">
                        {companyInitials(exp.company)}
                      </div>
                    )}
                    <div>
                      <h3>{exp.role}</h3>
                      <p className="timeline-company">
                        {exp.company} · <em>{exp.period}</em>
                      </p>
                    </div>
                  </div>
                  {exp.description && <p className="timeline-desc">{exp.description}</p>}
                </div>
              </article>
            );
          })}
        </div>
      </SectionShell>
    </Fade>
  );
}
