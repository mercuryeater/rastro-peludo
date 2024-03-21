import Layout from "@/components/Layout/Layout";
import Us from "@/components/Us/Us";

export default function testeo() {
  const title = "Nosotros";
  return (
    <>
      <Layout title={title}>
        <Us />
      </Layout>
    </>
  );
}
