import React from "react";
import PageContainer from "../../../components/shared/PageContainer";
import ConsensusSummary from "../../../components/hangers/ConsensusSummary";
import DiscussionThread from "../../../components/hangers/DiscussionThread";
import FriendReactions from "../../../components/hangers/FriendReactions";
import HangerHeader from "../../../components/hangers/HangerHeader";
import OutfitPieces from "../../../components/hangers/OutfitPieces";
import StylistNotes from "../../../components/hangers/StylistNotes";
import { getHangerDetail } from "../../../data/hangers/mockHangerDetails";

type HangerDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function HangerDetailPage({ params }: HangerDetailPageProps) {
  const resolvedParams = await params;
  const hanger = getHangerDetail(resolvedParams.id);

  return (
    <PageContainer>
      <article className="hanger-detail-page">
        <HangerHeader name={hanger.name} status={hanger.status} />
        <OutfitPieces pieces={hanger.outfitPieces} />
        <StylistNotes notes={hanger.stylistNotes} />
        <ConsensusSummary consensus={hanger.consensus} />
        <FriendReactions reactions={hanger.reactions} />
        <DiscussionThread comments={hanger.discussion} />
      </article>
    </PageContainer>
  );
}
