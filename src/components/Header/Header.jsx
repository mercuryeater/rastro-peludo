import Image from "next/image";
import Link from "next/link";
import style from "./Header.module.scss";
import { FiMenu, FiX } from "react-icons/fi";
import { useState, useRef, useEffect } from "react";
import Menu from "@components/Header/Menu/Menu";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const links = {
    Publicaciones: "/posts",
    // "Cómo funciona": "/how",
    Nosotros: "/us",
  };

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

          <Link href="/" className={style.Header__title}>
            <div className={style.Header__title__logo}>
              <Image src="/paw.png" alt="icon" width={200} height={200} />
            </div>
            <h1 className={style.Header__title__text}>RASTROPELUDO</h1>
          </Link>

          <span className={style.Header__links}>
            {Object.entries(links).map(([key, value], index) => (
              <Link key={index} href={value} className={style.Header__title}>
                <p>{key}</p>
              </Link>
            ))}
          </span>
        </div>
      </header>
      {showMenu ? <Menu links={links} setShowMenu={setShowMenu} /> : null}
    </>
  );
}
