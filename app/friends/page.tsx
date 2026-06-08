import React from "react";
import PageContainer from "../../components/shared/PageContainer";
import PageHeader from "../../components/shared/PageHeader";

export default function Page() {
  return (
    <PageContainer>
      <PageHeader
        title="Friends"
        description="Invite collaborators to react, chat, and shape your shopping direction."
      />
      <div className="page-placeholder">Collaborative shopping coming soon.</div>
    </PageContainer>
  );
}
