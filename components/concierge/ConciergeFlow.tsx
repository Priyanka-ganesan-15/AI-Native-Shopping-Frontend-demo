"use client";

import { useState } from "react";
import { styleArchetypes } from "../../data/styles/styleArchetypes";

const OCCASIONS = ["Conference", "Wedding", "Vacation", "Date Night", "Workwear", "Everyday"];

export default function ConciergeFlow() {
  const [step, setStep] = useState(1);
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);

  function handleOccasionClick() {
    setStep(2);
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

  return (
    <section className="concierge-flow" aria-label="Concierge flow">
      <div className="concierge-flow__step" key={step}>
        <p className="concierge-flow__eyebrow">ATELIER CONCIERGE</p>
        <h1 className="concierge-flow__title">
          {step === 1
            ? "What are we shopping for today?"
            : step === 2
              ? "Tell us a little more."
              : step === 3
                ? "Which of these feels most like you?"
                : "What colors do you gravitate toward?"}
        </h1>

        {step === 1 ? (
          <div className="concierge-flow__cards" role="list" aria-label="Occasion options">
            {OCCASIONS.map((occasion) => (
              <button
                type="button"
                key={occasion}
                className="concierge-flow__card"
                onClick={handleOccasionClick}
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
            />
            <div className="concierge-flow__footer">
              <button type="button" className="concierge-flow__continue" onClick={() => setStep(3)}>
                Continue →
              </button>
            </div>
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
            <div className="concierge-flow__footer">
              <button
                type="button"
                className="concierge-flow__continue"
                onClick={() => setStep(4)}
                disabled={selectedStyles.length === 0}
              >
                Continue →
              </button>
            </div>
          </div>
        ) : (
          <div className="concierge-flow__detail concierge-flow__detail--wide">
            <p className="concierge-style-count">Color selection screen is next.</p>
          </div>
        )}
      </div>
    </section>
  );
}
