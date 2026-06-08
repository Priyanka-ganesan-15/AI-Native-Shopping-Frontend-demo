import React from "react";
import PageContainer from "../../components/shared/PageContainer";
import PageHeader from "../../components/shared/PageHeader";

export default function Page() {
  return (
    <PageContainer>
      <PageHeader
        title="Workspace"
        description="Build outfits, explore recommendations, and refine your style with AI."
      />
      <div className="page-placeholder">Moodboards coming soon.</div>
    </PageContainer>
  );
}
