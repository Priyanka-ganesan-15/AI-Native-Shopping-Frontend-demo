import PageContainer from "../../components/shared/PageContainer";
import PageHeader from "../../components/shared/PageHeader";

export default function Page() {
  return (
    <PageContainer>
      <PageHeader
        title="Closet"
        description="Pieces you've saved, carted, and purchased."
      />
      <div className="page-placeholder">Your saved pieces will appear here soon.</div>
    </PageContainer>
  );
}
