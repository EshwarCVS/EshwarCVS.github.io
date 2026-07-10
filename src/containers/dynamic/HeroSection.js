import React, {useContext} from "react";
import {Fade} from "react-reveal";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {greeting, socialMediaLinks} from "../../portfolio";
import {useSiteData} from "../../contexts/SiteDataContext";
import StyleContext from "../../contexts/StyleContext";
import walmartLogo from "../../assets/images/walmartLogo.svg";

export default function HeroSection() {
  const {data} = useSiteData();
  const {mode} = useContext(StyleContext);
  const profile = data?.profile || {};
  const displayName = profile.intro_name || "Eshwar Thedla";
  const fullName =
    profile.full_name || profile.name || greeting.username || "Eshwar Chandra Vidhyasagar Thedla";
  const title = profile.title || "Software Engineer";
  const company = profile.company || "";
  const tagline = profile.tagline || greeting.subTitle;
  const resumeLink = profile.resume || greeting.resumeLink;
  const isFun = mode === "fun";
  const showWalmart = /walmart/i.test(company);

  return (
    <Fade bottom duration={900} distance="30px">
      <section id="hero" className="hero-section">
        <div className="hero-mesh" aria-hidden="true" />
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-eyebrow">
              {isFun ? "Portfolio · Built with curiosity" : "Portfolio · Auto-synced weekly"}
            </p>
            <h1 className="hero-name">{displayName}</h1>
            <p className="hero-role">
              {title}
              {company ? (
                <>
                  {" "}
                  <span className="hero-at">@</span>{" "}
                  {showWalmart && (
                    <img
                      src={walmartLogo}
                      alt=""
                      className="hero-company-logo"
                    />
                  )}
                  <span>{company}</span>
                </>
              ) : null}
            </p>
            <p className="hero-tagline">
              {isFun
                ? "I ship data platforms by day and open-source tools by night — usually with coffee and a half-finished Substack draft."
                : tagline}
            </p>
            {socialMediaLinks.display && <SocialMedia />}
            <div className="hero-actions">
              <Button text="View work" href="#projects" />
              <Button text="Get in touch" href="#contact" />
              {resumeLink && (
                <a
                  href={resumeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="hero-resume-link"
                >
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
> ${fullName}
$ role --current
> ${title}${company ? ` @ ${company}` : ""}
$ mode --${isFun ? "fun" : "formal"}
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
