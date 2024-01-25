import Layout from "@/components/Layout/Layout";
import ReportForm from "@/components/Report/RepForm/ReportForm";

export default function Report() {
  const title = "Reporta un peludo";

  return (
    <Layout title={title}>
      <ReportForm />
    </Layout>
  );
}
