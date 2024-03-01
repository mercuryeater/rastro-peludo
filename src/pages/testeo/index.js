import Layout from "@/components/Layout/Layout";
import { useRouter } from "next/router";

export default function Testeo() {
  const router = useRouter();

  return (
    <>
      <Layout title={"title"}>
        <h1>HOLA MUNDO</h1>
        <h2>Esto es test</h2>
        <button type="button" onClick={() => router.push("./details")}>
          detailsDog
        </button>
      </Layout>
    </>
  );
}
