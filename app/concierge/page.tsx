import PageContainer from "../../components/shared/PageContainer";
import PageHeader from "../../components/shared/PageHeader";

export default function Page() {
  return (
    <PageContainer>
      <PageHeader
        title="Concierge"
        description="Tell us what you are shopping for and let AI guide the direction."
      />
      <div className="page-placeholder">Intent-driven concierge experience coming soon.</div>
    </PageContainer>
  );
}
