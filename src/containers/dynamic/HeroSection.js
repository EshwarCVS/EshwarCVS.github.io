import React, {useContext} from "react";
import {Fade} from "react-reveal";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {greeting, socialMediaLinks} from "../../portfolio";
import {useSiteData} from "../../contexts/SiteDataContext";
import StyleContext from "../../contexts/StyleContext";

export default function HeroSection() {
  const {data} = useSiteData();
  const {isDark} = useContext(StyleContext);
  const profile = data?.profile || {};
  const name = profile.intro_name || profile.name || greeting.username;
  const title = profile.title || "Software Engineer";
  const company = profile.company || "";
  const tagline =
    data?.experience?.[0]?.description ||
    greeting.subTitle;

  return (
    <Fade bottom duration={900} distance="30px">
      <section id="hero" className="hero-section">
        <div className="hero-mesh" aria-hidden="true" />
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-eyebrow">Portfolio · Auto-synced weekly</p>
            <h1 className={isDark ? "hero-name dark-mode" : "hero-name"}>
              {name}
            </h1>
            <p className="hero-role">
              {title}
              {company ? (
                <>
                  {" "}
                  <span className="hero-at">@</span> {company}
                </>
              ) : null}
            </p>
            <p className={isDark ? "hero-tagline dark-mode" : "hero-tagline"}>
              {tagline}
            </p>
            {socialMediaLinks.display && <SocialMedia />}
            <div className="hero-actions">
              <Button text="View work" href="#projects" />
              <Button text="Get in touch" href="#contact" />
              {greeting.resumeLink && (
                <a href={greeting.resumeLink} target="_blank" rel="noreferrer" className="hero-resume-link">
                  Resume ↗
                </a>
              )}
            </div>
          </div>
          <div className="hero-panel">
            <div className="hero-terminal">
              <div className="hero-terminal-bar">
                <span />
                <span />
                <span />
              </div>
              <pre className="hero-terminal-body">
                <code>{`$ whoami
> ${name}
$ role --current
> ${title}${company ? ` @ ${company}` : ""}
$ stack --top
> ${(data?.skills || []).slice(0, 6).join(" · ") || "Python · Java · Spark"}`}</code>
              </pre>
            </div>
          </div>
        </div>
        <a href="#experience" className="hero-scroll">
          Scroll
        </a>
      </section>
    </Fade>
  );
}
