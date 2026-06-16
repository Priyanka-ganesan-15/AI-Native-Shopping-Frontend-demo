import React from "react";
import { HangerComment } from "../../data/hangers/mockHangerDetails";

type DiscussionThreadProps = {
  comments: HangerComment[];
};

export default function DiscussionThread({ comments }: DiscussionThreadProps) {
  return (
    <section className="hanger-section" aria-labelledby="hanger-discussion-title">
      <h2 id="hanger-discussion-title" className="hanger-section__title">
        Discussion
      </h2>
      <div className="hanger-thread">
        {comments.map((comment) => (
          <article key={comment.id} className="hanger-thread__comment">
            <p className="hanger-thread__meta">
              <span className="hanger-thread__person">{comment.person}</span>
              <span className="hanger-thread__time">{comment.timestamp}</span>
            </p>
            <p className="hanger-thread__message">{comment.message}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
