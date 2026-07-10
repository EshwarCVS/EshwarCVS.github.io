import React from "react";

export default function SectionShell({id, number, label, title, subtitle, terminal, children}) {
  return (
    <section id={id} className="dynamic-section">
      <div className="section-header">
        <div className="section-meta">
          <span className="section-number">{number}</span>
          <span className="section-label">{label}</span>
        </div>
        {terminal && <div className="terminal-prompt">{terminal}</div>}
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>
      <div className="section-body">{children}</div>
    </section>
  );
}
