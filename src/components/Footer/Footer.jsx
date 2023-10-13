// import { IconBrandGithubFilled, IconBrandLinkedin } from "@tabler/icons-react";
import Image from "next/image";
import style from "./Footer.module.scss";

export default function Footer() {
  const links = ["Nosotros", "Términos y condiciones", "Contacto", "Recursos"];
  return (
    <footer className={style.footer}>
      <span className={style.footer__title}>
        <div className={style.footer__title__logo}>
          <Image src="/paw.png" alt="icon" width={200} height={200} />
        </div>
        <h2 className={style.footer__title__text}>RASTROPELUDO</h2>
      </span>
      <nav>
        <ul className={style.footer__links}>
          {links.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
