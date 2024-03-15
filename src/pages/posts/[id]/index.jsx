import Details from "@/components/Details/Details";
import Footer from "@/components/Footer/Footer";
import { useRouter } from "next/router";

export default function Test() {
  const router = useRouter();
  return (
    <div>
      <Details />
      <Footer />
    </div>
  );
}
