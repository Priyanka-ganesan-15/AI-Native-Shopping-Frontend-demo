const MOODBOARD_IMAGES = [
  {
    id: "tailoring",
    title: "Tailoring",
    className: "workspace-moodboard__tile workspace-moodboard__tile--left",
  },
  {
    id: "texture",
    title: "Texture",
    className: "workspace-moodboard__tile workspace-moodboard__tile--right",
  },
  {
    id: "silhouette",
    title: "Silhouette",
    className: "workspace-moodboard__tile workspace-moodboard__tile--wide",
  },
];

export default function MoodboardGrid() {
  return (
    <div className="workspace-moodboard" aria-label="Editorial moodboard">
      {MOODBOARD_IMAGES.map((image) => (
        <article key={image.id} className={image.className}>
          <div className="workspace-moodboard__overlay" />
          <p className="workspace-moodboard__label">{image.title}</p>
        </article>
      ))}
    </div>
  );
}
