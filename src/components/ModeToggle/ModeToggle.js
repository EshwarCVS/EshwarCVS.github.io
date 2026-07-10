import React from "react";
import "./ModeToggle.scss";

export default function ModeToggle({mode, onChange}) {
  return (
    <div className="mode-toggle" role="group" aria-label="Site mode">
      <button
        type="button"
        className={mode === "formal" ? "mode-btn is-active" : "mode-btn"}
        onClick={() => onChange("formal")}
        aria-pressed={mode === "formal"}
      >
        Formal
      </button>
      <button
        type="button"
        className={mode === "fun" ? "mode-btn is-active" : "mode-btn"}
        onClick={() => onChange("fun")}
        aria-pressed={mode === "fun"}
      >
        Fun
      </button>
    </div>
  );
}
