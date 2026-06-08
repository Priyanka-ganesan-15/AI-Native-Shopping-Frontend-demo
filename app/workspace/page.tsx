"use client";

import React, { useEffect, useState } from "react";
import PageContainer from "../../components/shared/PageContainer";

type WorkspaceBrief = {
  occasion: string;
  styleDirection: string;
  colorStory: string[];
  inspiredBy: string[];
  keywords: string[];
  story?: string;
};

const FALLBACK_BRIEF: WorkspaceBrief = {
  occasion: "Women's Leadership Conference",
  styleDirection: "Modern Professional",
  colorStory: ["Stone", "Navy", "Cream"],
  inspiredBy: ["COS", "TOTEME", "THE ROW"],
  keywords: ["Refined", "Confident", "Tailored"],
};

export default function Page() {
  const [brief, setBrief] = useState<WorkspaceBrief>(FALLBACK_BRIEF);

  useEffect(() => {
    const savedBrief = window.sessionStorage.getItem("atelierStyleBrief");

    if (!savedBrief) {
      return;
    }

    try {
      const parsed = JSON.parse(savedBrief) as WorkspaceBrief;
      setBrief(parsed);
    } catch {
      setBrief(FALLBACK_BRIEF);
    }
  }, []);

  return (
    <PageContainer>
      <section className="workspace-brief" aria-label="Generated style brief">
        <p className="workspace-brief__eyebrow">Style Brief</p>
        <h1 className="workspace-brief__title">{brief.occasion}</h1>

        <div className="workspace-brief__grid">
          <article className="workspace-brief__block">
            <h2 className="workspace-brief__label">Style Direction</h2>
            <p className="workspace-brief__value">{brief.styleDirection}</p>
          </article>

          <article className="workspace-brief__block">
            <h2 className="workspace-brief__label">Color Story</h2>
            <ul className="workspace-brief__list">
              {brief.colorStory.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="workspace-brief__block">
            <h2 className="workspace-brief__label">Inspired By</h2>
            <ul className="workspace-brief__list">
              {brief.inspiredBy.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="workspace-brief__block">
            <h2 className="workspace-brief__label">Keywords</h2>
            <ul className="workspace-brief__list">
              {brief.keywords.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <button type="button" className="workspace-brief__cta">
          Explore Recommendations →
        </button>
      </section>
    </PageContainer>
  );
}
