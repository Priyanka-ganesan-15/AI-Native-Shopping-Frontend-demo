import React from "react";
import { HangerOutfitPiece } from "../../data/hangers/mockHangerDetails";

type OutfitPiecesProps = {
  pieces: HangerOutfitPiece[];
};

export default function OutfitPieces({ pieces }: OutfitPiecesProps) {
  return (
    <section className="hanger-section" aria-labelledby="hanger-outfit-pieces-title">
      <h2 id="hanger-outfit-pieces-title" className="hanger-section__title">
        Outfit Pieces
      </h2>
      <div className="hanger-pieces-grid">
        {pieces.map((piece) => (
          <article key={piece.id} className="hanger-piece-card">
            <div className={`hanger-piece-card__image hanger-piece-card__image--${piece.imageTone}`} />
            <h3 className="hanger-piece-card__name">{piece.name}</h3>
            <p className="hanger-piece-card__meta">{piece.brand}</p>
            <p className="hanger-piece-card__note">{piece.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
