import Header from "./Header/Header";
import s from "./Details.module.scss";
import Link from "next/link";
import Image from "next/image";
import dog1 from "@assets/pets/dog1.jpg";

export default function Details() {
  const isSeen = false;

  return (
    <main className={s.container}>
      {/* {isMobile ? <h1>Mobile View</h1> : <h1>Desktop View</h1>} */}
      <Header />
      {/* Aca iria un menu de ir a la página anterior y compartir publicación */}
      <Image src={dog1} alt="dog" />
      <div className={s.container__info}>
        {isSeen ? (
          <p>Visto</p>
        ) : (
          // aca reemplazar elementos dependiendo si es visto o perdido
          <p>Perdido</p>
        )}
        <hr />
        <div className={s.description}>
          <h3>Descripción</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            tincidunt euismod tortor vitae egestas. Aenean tellus metus.
          </p>
        </div>

        <hr />

        <div className={s.contact}>
          <h3>Contacto</h3>
          <p>Nombre Pepito</p>
          <p>alguncorreo@gmail.com</p>
          <p>305888999</p>
        </div>

        <hr />

        <div className={s.clues}>
          <h3>Pistas</h3>
          <form className={s.clues__form} action="">
            <textarea
              type="text"
              name="clues"
              cols="30"
              rows="10"
              placeholder="Dejar pista sobre este peludo"
              maxLength="1000"
              required
            />
            <button className={s.btnClue} type="submit">
              Publicar pista
            </button>
          </form>
        </div>

        <hr />
      </div>
    </main>
  );
}
