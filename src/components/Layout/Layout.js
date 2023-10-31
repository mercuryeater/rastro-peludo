import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";

export default function Layout({ children, title }) {
  return (
    <>
      <Header />
      <Hero title={title} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
