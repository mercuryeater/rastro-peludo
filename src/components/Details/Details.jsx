import MobileHeader from "./Header/DetailsHeader";
import Header from "@components/Header/Header";
import s from "./Details.module.scss";
import Link from "next/link";
import Image from "next/image";
import dog1 from "@assets/pets/dog1.jpg";
import useScreenSize from "@hooks/useScreenSize";

export default function Details() {
  const isSeen = false;
  const screenSize = useScreenSize();

  function publishClue(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const clue = Object.fromEntries(formData);
    console.log("Clue published: " + JSON.stringify(clue));
  }

  return (
    <main className={s.container}>
      {screenSize.width < 481 ? <MobileHeader /> : <Header />}
      <Image src={dog1} alt="dog" />
      <div className={s.container__info}>
        {isSeen ? (
          <h1 className={s.title}>Perro - Cafe y negro</h1>
        ) : (
          // aca reemplazar elementos dependiendo si es visto o perdido
          <h1 className={s.title}>Moro</h1>
        )}
        <hr />
        {isSeen ? null : (
          <div className={s.lostInfo}>
            <p>Perro - Sabueso</p>
            <p>Café y negro - 4 años</p> <hr />
          </div>
        )}
        <div className={s.pathInfo}>
          <p>Visto por ultima vez en:</p>
          <h2>Cra 19A #127 - 50</h2>
          <p>En la fecha - hora:</p>
          <h2>25/11/2023 - 10:30</h2>
          <hr />
        </div>
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
          <form className={s.clues__form} onSubmit={publishClue}>
            <textarea
              type="text"
              name="clue"
              cols="30"
              rows="10"
              placeholder="Dejar pista sobre este peludo..."
              maxLength="500"
              required
            />
            <button className={s.btnClue} type="submit">
              Publicar pista
            </button>
          </form>
        </div>

        <hr />
        <div className={s.footerIntersection}></div>
      </div>
    </main>
  );
}
