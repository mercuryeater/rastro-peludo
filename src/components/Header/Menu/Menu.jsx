import style from "./Menu.module.scss";
import { useRef, useEffect } from "react";

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
      {links.map((link, index) => (
        <p key={index}>{link}</p>
      ))}
    </div>
  );
}
