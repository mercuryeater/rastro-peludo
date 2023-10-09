import Image from "next/image";
import style from "./Header.module.scss";
import { FiMenu, FiX } from "react-icons/fi";
import { useState, useRef, useEffect } from "react";
import Menu from "@components/Header/Menu/Menu";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const links = ["Publicaciones", "Cómo funciona", "Nosotros"];

  return (
    <>
      <header className={style.Header}>
        <div className={style.Header__content}>
          {showMenu ? (
            <button type="buttton" onClick={() => setShowMenu(false)}>
              <FiX className={style.Header__menu} />
            </button>
          ) : (
            <button type="buttton" onClick={() => setShowMenu(true)}>
              <FiMenu className={style.Header__menu} />
            </button>
          )}

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
            {links.map((link, index) => (
              <p key={index}>{link}</p>
            ))}
          </span>
        </div>
      </header>
      {showMenu ? <Menu links={links} setShowMenu={setShowMenu} /> : null}
    </>
  );
}
