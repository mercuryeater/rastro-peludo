import Image from "next/image";
import { useState } from "react";
import Cards from "./Cards/Cards.jsx";
import dog1 from "@assets/pets/dog1.jpg";
import dog2 from "@assets/pets/dog2.jpg";
import s from "./Posts.module.scss";
import db from "../../db/db.json";

export default function Posts() {
  const [postType, setPostType] = useState("");
  // console.log(db);

  const handleInputChange = (event) => {
    setPostType(event.target.value);
  };

  const mockPosts = [
    {
      especie: "Perro",
      foto: dog1,
      color: "Blanco y café",
      direccion: "Cra 19A # 127",
      fecha: "25/11/2023",
      hora: "10:30",
    },
    {
      especie: "Perro",
      foto: dog2,
      color: "Café con blanco",
      direccion: "Cll 126 # 30 - 25",
      fecha: "20/11/2023",
      hora: "17:10",
    },
    {
      especie: "Perro",
      foto: dog1,
      color: "Blanco y café",
      direccion: "Cra 19A # 127",
      fecha: "25/11/2023",
      hora: "10:30",
    },
    {
      especie: "Perro",
      foto: dog2,
      color: "Café con blanco",
      direccion: "Cll 126 # 30 - 25",
      fecha: "20/11/2023",
      hora: "17:10",
    },
  ];

  return (
    <main className={s.Content}>
      <h3 className={s.Content__title}>¿Qué sección de Peludos quieres ver?</h3>
      <div className={s.Content__radioContainer}>
        <div className={s.Content__radio}>
          <label className={s.Content__radio__label} htmlFor="visto">
            <input
              className={s.Content__radio__input}
              type="radio"
              id="visto"
              value="vistos"
              name="postType"
              onChange={handleInputChange}
            />
            <span className={s.Content__radio__checkmark} />
            Vistos
          </label>
        </div>
        <div className={s.Content__radio}>
          <label className={s.Content__radio__label} htmlFor="perdido">
            <input
              className={s.Content__radio__input}
              type="radio"
              id="perdido"
              value="perdidos"
              name="postType"
              onChange={handleInputChange}
            />
            <span className={s.Content__radio__checkmark} />
            Perdidos
          </label>
        </div>
      </div>
      {postType === "vistos" && <h1>Visto</h1>}
      {postType === "perdidos" && <h1>Perdido</h1>}

      <div className={s.Posts}>
        {mockPosts.map((post, i) => (
          <Cards key={i} post={post} type={postType} />
        ))}
      </div>
    </main>
  );
}
