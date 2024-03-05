import MobileHeader from "./Header/DetailsHeader";
import Header from "@components/Header/Header";
import s from "./Details.module.scss";
import Link from "next/link";
import Image from "next/image";
import dog1 from "@assets/pets/dog1.jpg";
import useScreenSize from "@hooks/useScreenSize";

export default function Details() {
  const isSeen = true;
  const screenSize = useScreenSize();

  function publishClue(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const clue = Object.fromEntries(formData);
    console.log("Clue published: " + JSON.stringify(clue));
  }

  return (
    <div className={s.page}>
      {screenSize.width < 481 ? <MobileHeader /> : <Header />}
      <main className={s.container}>
        <Image className={s.container__image} src={dog1} alt="dog" />
        {isSeen ? (
          <div className={s.container__title}>
            <h1>Perro - Cafe y negro</h1>
            <hr />
          </div>
        ) : (
          <div className={s.container__title}>
            <h1>Moro</h1>
            <hr />
          </div>
        )}
        <div className={s.container__info}>
          {isSeen ? null : (
            <>
              <div className={s.container__info__lostInfo}>
                {screenSize.width > 1025 ? <hr /> : null}
                <p>Perro - Sabueso</p>
                <p>Café y negro - 4 años</p>
                {screenSize.width < 740 ? <hr /> : null}
              </div>
            </>
          )}

          <div className={s.container__info__pathInfo}>
            <p>Visto por ultima vez en:</p>
            <h2>Cra 19A #127 - 50</h2>
            <p>En la fecha - hora:</p>
            <h2>25/11/2023 - 10:30</h2>
          </div>

          <div className={s.container__info__description}>
            <hr />
            <h3>Descripción</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              tincidunt euismod tortor vitae egestas. Aenean tellus metus.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              tincidunt euismod tortor vitae egestas. Aenean tellus metus.
            </p>
          </div>

          <div
            className={`${s.container__info__contact} ${
              isSeen ? s.container__info__contactSeen : null
            }`}
          >
            {screenSize.width < 740 ? <hr /> : null}
            <h3>Contacto</h3>
            <p>Nombre Pepito</p>
            <p>alguncorreo@gmail.com</p>
            <p>305888999</p>
          </div>
        </div>
        <div className={s.container__clues}>
          <hr />
          <h3>Pistas</h3>
          <form className={s.container__clues__form} onSubmit={publishClue}>
            <textarea
              type="text"
              name="clue"
              cols="30"
              rows="10"
              placeholder="Dejar pista sobre este peludo..."
              maxLength="500"
              required
            />
            <button type="submit">Publicar pista</button>
          </form>
          <hr />
        </div>
      </main>
      <div className={s.footerIntersection}></div>
    </div>
  );
}
