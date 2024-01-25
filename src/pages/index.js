import Head from "next/head";
import HomeCTA from "@/components/Home/HomeCTA/HomeCTA";
import Info from "@components/Home/Info/Info";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const homeTitle = "Siguiendo huellas y reuniendo corazones";

  return (
    <div className="tout">
      <Layout title={homeTitle}>
        <HomeCTA />
        <Info />
      </Layout>
    </div>
  );
}
