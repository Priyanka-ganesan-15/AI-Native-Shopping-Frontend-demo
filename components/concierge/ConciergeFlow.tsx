"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { styleArchetypes } from "../../data/styles/styleArchetypes";
import { colorStories } from "../../data/styles/colorStories";

const OCCASIONS = ["Conference", "Wedding", "Vacation", "Date Night", "Workwear", "Everyday"];
const OCCASION_BRIEF_TITLES: Record<string, string> = {
  Conference: "Women's Leadership Conference",
  Wedding: "Summer Wedding",
  Vacation: "Weekend Getaway",
  "Date Night": "Date Night",
  Workwear: "New Job",
  Everyday: "Everyday Essentials",
};

const BRAND_OPTIONS = [
  "ZARA",
  "MANGO",
  "COS",
  "MASSIMO DUTTI",
  "ARITZIA",
  "SEZANE",
  "TOTEME",
  "THE ROW",
  "ARKET",
  "EVERLANE",
  "REFORMATION",
  "& OTHER STORIES",
];

const PROGRESS_STEPS = ["01 Occasion", "02 Story", "03 Style", "04 Color", "05 Brand"];

const LOADING_LINES = [
  "Analyzing your occasion",
  "Understanding your aesthetic",
  "Building a color story",
  "Curating silhouettes",
  "Selecting key pieces",
];

const STYLE_KEYWORDS: Record<string, string[]> = {
  minimal: ["Refined", "Quiet", "Clean"],
  tailored: ["Confident", "Structured", "Polished"],
  relaxed: ["Effortless", "Soft", "Easy"],
  classic: ["Timeless", "Elegant", "Balanced"],
  romantic: ["Feminine", "Fluid", "Delicate"],
  modern: ["Architectural", "Sharp", "Directional"],
};

export default function ConciergeFlow() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [selectedOccasion, setSelectedOccasion] = useState<string | null>(null);
  const [story, setStory] = useState("");
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [selectedColorStories, setSelectedColorStories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [loadingProgress, setLoadingProgress] = useState(0);

  function handleOccasionClick(occasion: string) {
    setSelectedOccasion(occasion);
  }

  function handleStyleToggle(styleId: string) {
    setSelectedStyles((current) => {
      if (current.includes(styleId)) {
        return current.filter((id) => id !== styleId);
      }

      if (current.length >= 3) {
        return current;
      }

      return [...current, styleId];
    });
  }

  function handleColorStoryToggle(colorStoryId: string) {
    setSelectedColorStories((current) => {
      if (current.includes(colorStoryId)) {
        return current.filter((id) => id !== colorStoryId);
      }

      if (current.length >= 3) {
        return current;
      }

      return [...current, colorStoryId];
    });
  }

  function handleBrandToggle(brand: string) {
    setSelectedBrands((current) => {
      if (current.includes(brand)) {
        return current.filter((item) => item !== brand);
      }

      if (current.length >= 5) {
        return current;
      }

      return [...current, brand];
    });
  }

  function handleBack() {
    setStep((current) => Math.max(1, current - 1));
  }

  function handleContinue() {
    if (step === 1 && !selectedOccasion) {
      return;
    }

    if (step === 3 && selectedStyles.length === 0) {
      return;
    }

    if (step === 4 && selectedColorStories.length === 0) {
      return;
    }

    if (step === 5 && selectedBrands.length === 0) {
      return;
    }

    if (step === 5) {
      const selectedStyleNames = styleArchetypes
        .filter((style) => selectedStyles.includes(style.id))
        .map((style) => style.name);

      const selectedColorNames = colorStories
        .filter((storyOption) => selectedColorStories.includes(storyOption.id))
        .map((storyOption) => storyOption.name);

      const keywordSet = new Set<string>();
      selectedStyles.forEach((styleId) => {
        (STYLE_KEYWORDS[styleId] || []).forEach((keyword) => keywordSet.add(keyword));
      });

      const workspaceBrief = {
        occasion: selectedOccasion ? OCCASION_BRIEF_TITLES[selectedOccasion] || selectedOccasion : "Style Brief",
        styleDirection:
          selectedStyleNames.length > 0 ? selectedStyleNames.join(" + ") : "Modern Professional",
        colorStory: selectedColorNames.length > 0 ? selectedColorNames : ["Stone", "Navy", "Cream"],
        inspiredBy: selectedBrands,
        keywords: Array.from(keywordSet).slice(0, 3).length
          ? Array.from(keywordSet).slice(0, 3)
          : ["Refined", "Confident", "Tailored"],
        story,
      };

      window.sessionStorage.setItem("atelierStyleBrief", JSON.stringify(workspaceBrief));
      setStep(6);
      return;
    }

    setStep((current) => Math.min(6, current + 1));
  }

  useEffect(() => {
    if (step !== 6) {
      return;
    }

    setLoadingProgress(0);

    const intervalId = window.setInterval(() => {
      setLoadingProgress((current) => {
        if (current >= LOADING_LINES.length) {
          return current;
        }

        return current + 1;
      });
    }, 1200);

    const routeTimeoutId = window.setTimeout(() => {
      router.push("/workspace");
    }, LOADING_LINES.length * 1200 + 600);

    return () => {
      window.clearInterval(intervalId);
      window.clearTimeout(routeTimeoutId);
    };
  }, [router, step]);

  const continueDisabled =
    (step === 1 && !selectedOccasion) ||
    (step === 3 && selectedStyles.length === 0) ||
    (step === 4 && selectedColorStories.length === 0) ||
    (step === 5 && selectedBrands.length === 0) ||
    step === 6;

  return (
    <section className="concierge-flow" aria-label="Concierge flow">
      <div className="concierge-flow__step" key={step}>
        {step <= 5 ? (
          <ol className="concierge-flow__progress" aria-label="Concierge progress">
            {PROGRESS_STEPS.map((progressLabel, index) => (
              <li
                key={progressLabel}
                className={
                  index + 1 === step ? "concierge-flow__progress-item is-active" : "concierge-flow__progress-item"
                }
              >
                {progressLabel}
              </li>
            ))}
          </ol>
        ) : null}

        <p className="concierge-flow__eyebrow">{step === 6 ? "ATELIER" : "ATELIER CONCIERGE"}</p>
        <h1 className="concierge-flow__title">
          {step === 1
            ? "What are we shopping for today?"
            : step === 2
              ? "Tell us a little more."
              : step === 3
                ? "Which of these feels most like you?"
                : step === 4
                  ? "What colors do you naturally gravitate toward?"
                  : step === 5
                    ? "Which brands feel most like you?"
                    : "Creating Your Style Brief"}
        </h1>

        {step === 1 ? (
          <div className="concierge-flow__cards" role="list" aria-label="Occasion options">
            {OCCASIONS.map((occasion) => (
              <button
                type="button"
                key={occasion}
                className={
                  selectedOccasion === occasion ? "concierge-flow__card is-selected" : "concierge-flow__card"
                }
                onClick={() => handleOccasionClick(occasion)}
              >
                {occasion}
              </button>
            ))}
          </div>
        ) : step === 2 ? (
          <div className="concierge-flow__detail">
            <textarea
              className="concierge-flow__textarea"
              placeholder="I&apos;m speaking on a panel and want to feel professional without looking overly corporate."
              aria-label="Describe your style context"
              value={story}
              onChange={(event) => setStory(event.target.value)}
            />
          </div>
        ) : step === 3 ? (
          <div className="concierge-flow__detail concierge-flow__detail--wide">
            <div className="concierge-style-grid" role="list" aria-label="Style archetype options">
              {styleArchetypes.map((style) => {
                const selected = selectedStyles.includes(style.id);

                return (
                  <button
                    key={style.id}
                    type="button"
                    className={selected ? "concierge-style-card is-selected" : "concierge-style-card"}
                    onClick={() => handleStyleToggle(style.id)}
                    aria-pressed={selected}
                  >
                    <div
                      className="concierge-style-card__image"
                      style={{ backgroundImage: `url(${style.image})` }}
                      aria-hidden="true"
                    >
                      <span className="concierge-style-card__image-label">Image</span>
                    </div>
                    <span className="concierge-style-card__name">{style.name}</span>
                  </button>
                );
              })}
            </div>
            <p className="concierge-style-count">Selected {selectedStyles.length} of 3</p>
          </div>
        ) : step === 4 ? (
          <div className="concierge-flow__detail concierge-flow__detail--wide">
            <p className="concierge-flow__subtitle">Choose the palettes that feel most like you.</p>
            <div className="concierge-color-grid" role="list" aria-label="Color story options">
              {colorStories.map((story) => {
                const selected = selectedColorStories.includes(story.id);

                return (
                  <button
                    key={story.id}
                    type="button"
                    className={selected ? "concierge-color-card is-selected" : "concierge-color-card"}
                    onClick={() => handleColorStoryToggle(story.id)}
                    aria-pressed={selected}
                  >
                    <div className="concierge-color-card__swatches" aria-hidden="true">
                      {story.colors.map((color) => (
                        <span
                          key={color}
                          className="concierge-color-card__swatch"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    <span className="concierge-color-card__name">{story.name}</span>
                  </button>
                );
              })}
            </div>
            <p className="concierge-style-count">Selected {selectedColorStories.length} of 3</p>
          </div>
        ) : step === 5 ? (
          <div className="concierge-flow__detail concierge-flow__detail--wide">
            <p className="concierge-flow__subtitle">
              Choose the brands whose aesthetic you naturally gravitate toward.
            </p>
            <div className="concierge-brand-grid" role="list" aria-label="Brand inspiration options">
              {BRAND_OPTIONS.map((brand) => (
                <button
                  key={brand}
                  type="button"
                  className={
                    selectedBrands.includes(brand) ? "concierge-brand-tile is-selected" : "concierge-brand-tile"
                  }
                  onClick={() => handleBrandToggle(brand)}
                  aria-pressed={selectedBrands.includes(brand)}
                >
                  {brand}
                </button>
              ))}
            </div>
            <p className="concierge-style-count">Selected {selectedBrands.length} of 5</p>
          </div>
        ) : (
          <div className="concierge-loading" aria-live="polite">
            <ul className="concierge-loading__list">
              {LOADING_LINES.map((line, index) => (
                <li key={line} className="concierge-loading__item">
                  <span className="concierge-loading__status">{index < loadingProgress ? "✓" : "•"}</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {step <= 5 ? (
          <div className="concierge-flow__footer">
            <button
              type="button"
              className="concierge-flow__back"
              onClick={handleBack}
              disabled={step === 1}
              aria-hidden={step === 1}
            >
              Back
            </button>
            <button
              type="button"
              className="concierge-flow__continue"
              onClick={handleContinue}
              disabled={continueDisabled}
            >
              Continue →
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
