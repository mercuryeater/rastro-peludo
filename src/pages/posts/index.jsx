import Layout from "@/components/Layout/Layout";
import Posts from "@/components/Posts/Posts";

export default function posts() {
  return (
    <>
      <Layout title={"Publicaciones"}>
        <h1>HOLA MUNDO</h1>
        <h2>Esto es publicaciones</h2>
        <Posts />
      </Layout>
    </>
  );
}
