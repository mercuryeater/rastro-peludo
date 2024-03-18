import Layout from "@/components/Layout/Layout";
import Posts from "@/components/Posts/Posts";

export const dynamic = "force-dynamic";

export default function posts() {
  return (
    <>
      <Layout title={"Publicaciones"}>
        <Posts />
      </Layout>
    </>
  );
}
