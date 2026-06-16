import React from "react";

type StylistNotesProps = {
  notes: string[];
};

export default function StylistNotes({ notes }: StylistNotesProps) {
  return (
    <section className="hanger-section" aria-labelledby="hanger-stylist-notes-title">
      <h2 id="hanger-stylist-notes-title" className="hanger-section__title">
        Stylist Notes
      </h2>
      <div className="hanger-notes">
        {notes.map((note) => (
          <p key={note} className="hanger-notes__text">
            {note}
          </p>
        ))}
      </div>
    </section>
  );
}
