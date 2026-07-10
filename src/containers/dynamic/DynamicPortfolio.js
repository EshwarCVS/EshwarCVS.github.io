import React from "react";
import {useSiteData} from "../../contexts/SiteDataContext";
import HeroSection from "./HeroSection";
import ExperienceSection from "./ExperienceSection";
import GitHubSection from "./GitHubSection";
import ProjectsSection from "./ProjectsSection";
import PublicationsSection from "./PublicationsSection";
import WritingSection from "./WritingSection";
import ActivitySection from "./ActivitySection";
import CommunitySection from "./CommunitySection";
import BeyondCodeSection from "./BeyondCodeSection";
import "./dynamic.scss";

export default function DynamicPortfolio() {
  const {data, loading} = useSiteData();

  if (loading) {
    return (
      <div className="site-loading">
        <div className="site-loading-bar" />
        <p>Loading portfolio data…</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="site-loading">
        <p>Portfolio data unavailable. Run the sync scripts or wait for the weekly deploy.</p>
      </div>
    );
  }

  return (
    <div className="dynamic-portfolio">
      <HeroSection />
      <ExperienceSection />
      <GitHubSection />
      <ProjectsSection />
      <PublicationsSection />
      <WritingSection />
      <ActivitySection />
      <CommunitySection />
      <BeyondCodeSection />
      {data.generated_at && (
        <p className="sync-footer">
          Auto-updated from{" "}
          <a href="https://github.com/EshwarCVS/EshwarCVS" target="_blank" rel="noreferrer">
            EshwarCVS profile repo
          </a>
          {" · "}
          {new Date(data.generated_at).toUTCString()}
        </p>
      )}
    </div>
  );
}
