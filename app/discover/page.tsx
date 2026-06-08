import PageContainer from "../../components/shared/PageContainer";
import PageHeader from "../../components/shared/PageHeader";

export default function Page() {
  return (
    <PageContainer>
      <PageHeader
        title="Discover"
        description="Browse editorial collections, trends, and inspiration."
      />
      <div className="page-placeholder">Editorial discovery feed coming soon.</div>
    </PageContainer>
  );
}
