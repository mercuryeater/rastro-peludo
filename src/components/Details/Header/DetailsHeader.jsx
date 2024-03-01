import { useState, useRef } from "react";
import s from "./DetailsHeader.module.scss";
import { useRouter } from "next/router";
import { FaShareFromSquare } from "react-icons/fa6";
import { IoChevronBack } from "react-icons/io5";
import { IoMdShare } from "react-icons/io";

export default function MobileDetailsHeader() {
  const router = useRouter();

  const [sharing, setSharing] = useState(false);

  // For the component fo sharing we use a ref to check clicks inside or outside
  const sharingRef = useRef(null);

  function openSharing() {
    setSharing(!sharing);
    console.log(`Clicked and set sharing to ${sharing}`);
  }

  return (
    <header className={s.header}>
      <IoChevronBack className={s.back} onClick={() => router.back()} />

      {/* El share debe crear por ejemplo un JSON con toda la info del post
      o hacer el fetch de esa info y de esta manera transportarlo a otras apps como fb, tw, etc
      Sin emabrgo lo que se puede hacer es que se abra una hover window donde va lo de copartir
      a diferentes paginas como fb, twitter, whatsapp, telegra, etc. Usando react-share lib */}
      <IoMdShare className={s.share} onClick={openSharing} />
    </header>
  );
}
