import React from "react";
import { HangerReaction } from "../../data/hangers/mockHangerDetails";

type FriendReactionsProps = {
  reactions: HangerReaction[];
};

export default function FriendReactions({ reactions }: FriendReactionsProps) {
  return (
    <section className="hanger-section" aria-labelledby="hanger-friend-reactions-title">
      <h2 id="hanger-friend-reactions-title" className="hanger-section__title">
        Friend Reactions
      </h2>
      <div className="hanger-reactions-list">
        {reactions.map((reaction) => (
          <article key={reaction.person} className="hanger-reaction-card">
            <p className="hanger-reaction-card__headline">
              <span className="hanger-reaction-card__person">{reaction.person}</span>
              <span className="hanger-reaction-card__count">
                {reaction.emoji} {reaction.count}
              </span>
            </p>
            <p className="hanger-reaction-card__note">{reaction.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
