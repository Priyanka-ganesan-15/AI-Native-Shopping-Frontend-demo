import PageContainer from "../../components/shared/PageContainer";
import PageHeader from "../../components/shared/PageHeader";

export default function Page() {
  return (
    <PageContainer>
      <PageHeader
        title="Style DNA"
        description="A living profile of your taste, preferences, and style evolution."
      />
      <div className="page-placeholder">Your fashion profile will appear here.</div>
    </PageContainer>
  );
}
