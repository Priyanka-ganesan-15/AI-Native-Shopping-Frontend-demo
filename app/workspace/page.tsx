"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import PageContainer from "../../components/shared/PageContainer";
import MoodboardGrid from "../../components/workspace/MoodboardGrid";
import { Hanger } from "../../types/hanger";
import SelectedProductsRail from "../../components/workspace/SelectedProductsRail";
import { conferenceProducts, ConferenceProduct } from "../../data/products/conferenceProducts";

type WorkspaceBrief = {
  occasion: string;
  styleDirection: string;
  colorStory: string[];
  inspiredBy: string[];
  keywords: string[];
  story?: string;
  createdAt?: string;
};

const FALLBACK_BRIEF: WorkspaceBrief = {
  occasion: "Women's Leadership Conference",
  styleDirection: "Modern Professional",
  colorStory: ["Stone", "Navy", "Cream", "Espresso"],
  inspiredBy: ["COS", "TOTEME", "THE ROW"],
  keywords: ["Confident", "Refined", "Tailored", "Modern"],
  createdAt: "Created June 2026",
};

function slugifyHangerName(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function Page() {
  const [brief, setBrief] = useState<WorkspaceBrief>(FALLBACK_BRIEF);
  const [hangers, setHangers] = useState<Hanger[]>([]);
  const [isCreateHangerOpen, setIsCreateHangerOpen] = useState(false);
  const [hangerName, setHangerName] = useState("");
  const [hangerDescription, setHangerDescription] = useState("");
  const [hangerPickerProduct, setHangerPickerProduct] = useState<ConferenceProduct | null>(null);
  const [hangerFormError, setHangerFormError] = useState("");

  useEffect(() => {
    const savedBrief = window.sessionStorage.getItem("atelierStyleBrief");

    if (!savedBrief) {
      return;
    }

    try {
      const parsed = JSON.parse(savedBrief) as WorkspaceBrief;
      setBrief({ ...FALLBACK_BRIEF, ...parsed, createdAt: FALLBACK_BRIEF.createdAt });
    } catch {
      setBrief(FALLBACK_BRIEF);
    }
  }, []);

  useEffect(() => {
    const savedHangers = window.localStorage.getItem("atelierHangers");

    if (!savedHangers) {
      return;
    }

    try {
      const parsed = JSON.parse(savedHangers) as Hanger[];
      setHangers(parsed);
    } catch {
      setHangers([]);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("atelierHangers", JSON.stringify(hangers));
  }, [hangers]);

  function handleCreateHanger() {
    const trimmedName = hangerName.trim();

    if (!trimmedName) {
      setHangerFormError("Please enter a hanger name.");
      return;
    }

    const duplicateName = hangers.some((hanger) => hanger.name.toLowerCase() === trimmedName.toLowerCase());

    if (duplicateName) {
      setHangerFormError("A hanger with this name already exists.");
      return;
    }

    const newHanger: Hanger = {
      id: `hanger-${Date.now()}`,
      name: trimmedName,
      description: hangerDescription.trim() || undefined,
      pieces: hangerPickerProduct ? 1 : 0,
      status: "Draft",
    };

    setHangers((current) => [newHanger, ...current]);
    setHangerName("");
    setHangerDescription("");
    setHangerFormError("");
    setIsCreateHangerOpen(false);
    setHangerPickerProduct(null);
  }

  function handleChooseHanger(hangerId: string) {
    setHangers((current) =>
      current.map((hanger) =>
        hanger.id === hangerId
          ? {
              ...hanger,
              pieces: hanger.pieces + 1,
            }
          : hanger,
      ),
    );
    setHangerPickerProduct(null);
  }

  function openCreateHanger(source: "picker" | "section" = "section") {
    if (source === "section") {
      setHangerPickerProduct(null);
    }

    setIsCreateHangerOpen(true);
    setHangerFormError("");
  }

  return (
    <PageContainer>
      <section className="workspace-v1" aria-label="Workspace style direction">
        <header className="workspace-v1__intent">
          <h1 className="workspace-v1__occasion">{brief.occasion}</h1>
          <p className="workspace-v1__meta">{brief.styleDirection} · {brief.createdAt}</p>
        </header>

        <section className="workspace-v1__section" aria-labelledby="workspace-style-brief-title">
          <h2 id="workspace-style-brief-title" className="workspace-v1__section-title">
            Style Brief
          </h2>

          <div className="workspace-v1__brief-block">
            <h3 className="workspace-v1__label">Style Direction</h3>
            <p className="workspace-v1__direction">{brief.styleDirection}</p>
            <p className="workspace-v1__summary">
              Refined tailoring with relaxed silhouettes. Designed to feel confident, polished, and
              approachable.
            </p>

            <div className="workspace-v1__brief-grid">
              <article>
                <h4 className="workspace-v1__label">Color Story</h4>
                <ul className="workspace-v1__swatches" aria-label="Color story swatches">
                  {brief.colorStory.map((colorName) => (
                    <li key={colorName} className="workspace-v1__swatch-item">
                      <span className={`workspace-v1__swatch workspace-v1__swatch--${colorName.toLowerCase()}`} />
                      <span>{colorName}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article>
                <h4 className="workspace-v1__label">Inspired By</h4>
                <ul className="workspace-v1__brand-list">
                  {brief.inspiredBy.map((brand) => (
                    <li key={brand}>{brand}</li>
                  ))}
                </ul>
              </article>

              <article>
                <h4 className="workspace-v1__label">Keywords</h4>
                <ul className="workspace-v1__keyword-list">
                  {brief.keywords.map((keyword) => (
                    <li key={keyword}>{keyword}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="workspace-v1__section" aria-labelledby="workspace-moodboard-title">
          <h2 id="workspace-moodboard-title" className="workspace-v1__section-title">
            Moodboard
          </h2>
          <MoodboardGrid />
        </section>

        <section className="workspace-v1__section" aria-labelledby="workspace-notes-title">
          <h2 id="workspace-notes-title" className="workspace-v1__section-title">
            Stylist Notes
          </h2>
          <p className="workspace-v1__notes">
            For this occasion we focused on structured pieces that communicate confidence while remaining
            approachable.
          </p>
          <p className="workspace-v1__notes">
            A palette of stone, navy, and cream creates a professional foundation while allowing individual
            pieces to feel timeless and versatile.
          </p>
        </section>

        <section className="workspace-v1__section" aria-labelledby="workspace-selected-title">
          <h2 id="workspace-selected-title" className="workspace-v1__section-title">
            Selected For This Brief
          </h2>
          <p className="workspace-v1__selected-subtitle">
            Curated around your occasion, color story, and preferred silhouettes.
          </p>
          <SelectedProductsRail products={conferenceProducts} onAddToHanger={(product) => setHangerPickerProduct(product)} />
        </section>

        <section className="workspace-v1__section" aria-labelledby="workspace-hangers-title">
          <h2 id="workspace-hangers-title" className="workspace-v1__section-title">
            Your Hangers
          </h2>

          {hangers.length === 0 ? (
            <div className="workspace-hangers__empty">
              <p className="workspace-hangers__empty-text">
                Create outfit concepts from recommendations and save them for later refinement.
              </p>
              <button
                type="button"
                className="workspace-hangers__create"
                onClick={() => openCreateHanger("section")}
              >
                Create Hanger
              </button>
            </div>
          ) : (
            <div className="workspace-hangers__list">
              {hangers.map((hanger) => (
                <article key={hanger.id} className="workspace-hanger-card">
                  <div className="workspace-hanger-card__top">
                    <h3 className="workspace-hanger-card__name">{hanger.name}</h3>
                    <span className="workspace-hanger-card__status">{hanger.status}</span>
                  </div>
                  <p className="workspace-hanger-card__pieces">{hanger.pieces} Pieces</p>
                  <p className="workspace-hanger-card__description">{hanger.description || "No description yet"}</p>
                  <Link href={`/hangers/${slugifyHangerName(hanger.name)}`} className="workspace-hanger-card__link">
                    Open Hanger
                  </Link>
                </article>
              ))}

              <button
                type="button"
                className="workspace-hangers__create workspace-hangers__create--inline"
                onClick={() => openCreateHanger("section")}
              >
                Create Hanger
              </button>
            </div>
          )}
        </section>

        <button type="button" className="workspace-v1__cta">
          Explore Recommendations →
        </button>
      </section>

      {isCreateHangerOpen ? (
        <div className="workspace-modal" role="dialog" aria-modal="true" aria-labelledby="create-hanger-title">
          <div className="workspace-modal__panel">
            <h2 id="create-hanger-title" className="workspace-modal__title">
              Create New Hanger
            </h2>

            <label className="workspace-modal__label" htmlFor="hanger-name">
              Name
            </label>
            <input
              id="hanger-name"
              className="workspace-modal__input"
              value={hangerName}
              onChange={(event) => {
                setHangerName(event.target.value);
                if (hangerFormError) {
                  setHangerFormError("");
                }
              }}
              placeholder="Day 1 Keynote"
            />

            <label className="workspace-modal__label" htmlFor="hanger-description">
              Description (optional)
            </label>
            <input
              id="hanger-description"
              className="workspace-modal__input"
              value={hangerDescription}
              onChange={(event) => setHangerDescription(event.target.value)}
              placeholder="Professional but relaxed"
            />

            {hangerFormError ? <p className="workspace-modal__error">{hangerFormError}</p> : null}

            <div className="workspace-modal__actions">
              <button
                type="button"
                className="workspace-modal__button workspace-modal__button--ghost"
                onClick={() => {
                  setIsCreateHangerOpen(false);
                  setHangerName("");
                  setHangerDescription("");
                  setHangerFormError("");
                }}
              >
                Cancel
              </button>
              <button
                type="button"
                className="workspace-modal__button workspace-modal__button--primary"
                onClick={handleCreateHanger}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {hangerPickerProduct && !isCreateHangerOpen ? (
        <div className="workspace-modal" role="dialog" aria-modal="true" aria-labelledby="choose-hanger-title">
          <div className="workspace-modal__panel">
            <h2 id="choose-hanger-title" className="workspace-modal__title">
              Choose Hanger
            </h2>
            <p className="workspace-modal__helper">{hangerPickerProduct.name}</p>

            {hangers.length === 0 ? (
              <div>
                <p className="workspace-modal__empty">Create a hanger first to save this piece.</p>
                <button
                  type="button"
                  className="workspace-modal__button workspace-modal__button--primary"
                  onClick={() => {
                    openCreateHanger("picker");
                  }}
                >
                  Create New Hanger
                </button>
              </div>
            ) : (
              <div className="workspace-modal__hanger-list">
                {hangers.map((hanger) => (
                  <button
                    type="button"
                    key={hanger.id}
                    className="workspace-modal__hanger-item"
                    onClick={() => handleChooseHanger(hanger.id)}
                  >
                    {hanger.name} ({hanger.pieces} Pieces)
                  </button>
                ))}
                <button
                  type="button"
                  className="workspace-modal__button workspace-modal__button--primary workspace-modal__button--inline"
                  onClick={() => openCreateHanger("picker")}
                >
                  Create New Hanger
                </button>
              </div>
            )}

            <div className="workspace-modal__actions">
              <button
                type="button"
                className="workspace-modal__button workspace-modal__button--ghost"
                onClick={() => setHangerPickerProduct(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </PageContainer>
  );
}
