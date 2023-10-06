import Image from "next/image";
import style from "./Header.module.scss";
import { TfiMenuAlt } from "react-icons/tfi";
import { FiMenu } from "react-icons/fi";

export default function Header() {
  return (
    <header className={style.Header}>
      <FiMenu className={style.Header__menu} />
      <div className={style.Header__title}>
        <div className={style.Header__title__logo}>
          <Image
            className={style.Header__title__logo}
            src="/paw.png"
            alt="icon"
            width={200}
            height={200}
          />
        </div>
        <h1 className={style.Header__title__text}>RASTROPELUDO</h1>
      </div>
      <span className={style.Header__links}>
        <p>Publicaciones</p>
        <p>Cómo funciona</p>
        <p>Nosotros</p>
      </span>
    </header>
  );
}
