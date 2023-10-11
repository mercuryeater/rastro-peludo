import style from "./HomeCTA.module.scss";
import { FaHandPointRight } from "react-icons/fa6";

export default function HomeCTA() {
  return (
    <main className={style.CTA}>
      <h3 className={style.CTA__text}>
        ¿Viste o perdiste un peludo? ¡Haz tu reporte ahora!
      </h3>
      <FaHandPointRight className={style.CTA__handIcon} />
      <button
        className={style.CTA__reportButton}
        type="button"
        onClick={() => console.log("reportando peludo ...")}
      >
        Reportar Peludo
      </button>
    </main>
  );
}
