import Link from "next/link";
import { useRef, useEffect } from "react";
import style from "./Menu.module.scss";

export default function Menu({ links, setShowMenu }) {
  const menuRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef, setShowMenu]);

  return (
    <div ref={menuRef} className={style.Menu}>
      {Object.entries(links).map(([key, value], i) => (
        <Link key={i} href={value}>
          <p>{key}</p>
        </Link>
      ))}
    </div>
  );
}
