const PREFERENCE_GROUPS = [
  {
    label: "Occasion",
    options: ["Conference", "Wedding", "Vacation", "Date Night", "Workwear", "Everyday"],
  },
  {
    label: "Budget",
    options: ["<$250", "$250-$500", "$500-$1000", "$1000+"],
  },
  {
    label: "Style",
    options: ["Minimal", "Classic", "Relaxed", "Tailored", "Romantic", "Bold"],
  },
  {
    label: "Color Palette",
    options: ["Neutrals", "Earth Tones", "Monochrome", "Pastels", "Jewel Tones"],
  },
  {
    label: "Brands",
    options: ["Zara", "Mango", "COS", "Massimo Dutti", "Aritzia"],
  },
  {
    label: "Modesty",
    options: ["Conservative", "Balanced", "Trend Forward"],
  },
];

export default function PreferenceGrid() {
  return (
    <section className="preference-grid" aria-label="Style preferences">
      {PREFERENCE_GROUPS.map((group) => (
        <article className="preference-group" key={group.label}>
          <h2 className="preference-group__label">{group.label}</h2>
          <div className="preference-group__chips">
            {group.options.map((option) => (
              <span className="preference-chip" key={option}>
                {option}
              </span>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}
