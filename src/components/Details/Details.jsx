import MobileHeader from "./Header/DetailsHeader";
import Header from "@components/Header/Header";
import s from "./Details.module.scss";
import Image from "next/image";
import useScreenSize from "@hooks/useScreenSize";

export default function Details({ postType, pet }) {
  const screenSize = useScreenSize();

  function publishClue(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const clue = Object.fromEntries(formData);
    console.log("Clue published: " + JSON.stringify(clue));
  }

  if (pet === "PetNotFound") {
    return (
      <div className={s.page}>
        {screenSize.width < 481 ? <MobileHeader /> : <Header />}
        <div className={s.content}>
          <div className={s.title}>
            <h1>Peludo no encontrado</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={s.page}>
      {screenSize.width < 481 ? <MobileHeader /> : <Header />}
      <main className={s.container}>
        <Image
          className={s.container__image}
          src={pet.photo}
          width={400}
          height={400}
          alt="dog"
        />
        {postType === "seen" ? (
          <div className={s.container__title}>
            <h1>
              {pet.especie} - {pet.color}
            </h1>
            <hr />
          </div>
        ) : (
          <div className={s.container__title}>
            <h1>{pet.name}</h1>
            <hr />
          </div>
        )}
        <div className={s.container__info}>
          {postType === "seen" ? null : (
            <>
              <div className={s.container__info__lostInfo}>
                {screenSize.width > 1025 ? <hr /> : null}
                <p>
                  {pet.especie} - {pet.race}
                </p>
                <p>
                  {pet.color} - {pet.edad}
                </p>
                {screenSize.width < 740 ? <hr /> : null}
              </div>
            </>
          )}

          <div className={s.container__info__pathInfo}>
            <p>Visto por ultima vez en:</p>
            <h2>{pet.location}</h2>
            <p>En la fecha - hora:</p>
            <h2>
              {pet.date} - {pet.time}
            </h2>
          </div>

          <div className={s.container__info__description}>
            <hr />
            <h3>Descripción</h3>
            <p>{pet.description}</p>
          </div>

          <div
            className={`${s.container__info__contact} ${
              postType === "seen" ? s.container__info__contactSeen : null
            }`}
          >
            {screenSize.width < 740 ? <hr /> : null}
            <h3>Contacto</h3>
            <p>{pet.contact.name}</p>
            <p>{pet.contact.email}</p>
            <p>{pet.contact.phone}</p>
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
