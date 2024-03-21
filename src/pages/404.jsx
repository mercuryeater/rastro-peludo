import dogImage from "@assets/dog404.png";
import Image from "next/image";
import Link from "next/link";
import s from "../styles/404.module.scss";

export default function Custom404() {
  return (
    <div className={s.notFound}>
      <Image src={dogImage} alt="sad dog image" />
      <div className={s.notFound__text}>
        <h1>404</h1>
        <h3>No pudimos encontrar la página específicada.</h3>
        <Link href="/">Volver a la página principal »</Link>
      </div>
    </div>
  );
}
