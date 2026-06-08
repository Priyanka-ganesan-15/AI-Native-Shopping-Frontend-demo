import React from "react";
import PageContainer from "../../components/shared/PageContainer";
import PageHeader from "../../components/shared/PageHeader";

export default function Page() {
  return (
    <PageContainer>
      <PageHeader
        title="My Profile"
        description="Manage your personal details and shopping preferences in one place."
      />
      <div className="page-placeholder">Profile settings coming soon.</div>
    </PageContainer>
  );
}
