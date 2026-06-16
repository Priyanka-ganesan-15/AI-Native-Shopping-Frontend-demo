import React from "react";
import { HangerConsensus } from "../../data/hangers/mockHangerDetails";

type ConsensusSummaryProps = {
  consensus: HangerConsensus;
};

export default function ConsensusSummary({ consensus }: ConsensusSummaryProps) {
  return (
    <section className="hanger-section" aria-labelledby="hanger-consensus-title">
      <h2 id="hanger-consensus-title" className="hanger-section__title">
        Group Consensus
      </h2>
      <dl className="hanger-consensus-grid">
        <div className="hanger-consensus-item">
          <dt>Most loved</dt>
          <dd>{consensus.mostLoved}</dd>
        </div>
        <div className="hanger-consensus-item">
          <dt>Mixed opinions</dt>
          <dd>{consensus.mixedOpinions}</dd>
        </div>
        <div className="hanger-consensus-item">
          <dt>Overall sentiment</dt>
          <dd>{consensus.overallSentiment}</dd>
        </div>
      </dl>
    </section>
  );
}
