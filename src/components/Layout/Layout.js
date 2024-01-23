import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";
import s from "./Layout.module.scss";

export default function Layout({ children, title }) {
  return (
    <>
      <Header />
      <Hero title={title} />
      <main className={s.Content}>{children}</main>
      <Footer />
    </>
  );
}
