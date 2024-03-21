import { useState, useEffect } from "react";
import Cards from "./Cards/Cards.jsx";
import dog1 from "@assets/pets/dog1.jpg";
import dog2 from "@assets/pets/dog2.jpg";
import s from "./Posts.module.scss";
import db from "@db/db.json";

export default function Posts() {
  const [postType, setPostType] = useState("");
  const [posts, setPosts] = useState([]);

  const handleInputChange = (event) => {
    setPostType(event.target.value);
  };

  useEffect(() => {
    if (postType === "seen") {
      setPosts(db.seen);
    } else if (postType === "lost") {
      setPosts(db.lost);
    }
  }, [postType]);

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
              value="seen"
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
              value="lost"
              name="postType"
              onChange={handleInputChange}
            />
            <span className={s.Content__radio__checkmark} />
            Perdidos
          </label>
        </div>
      </div>

      <div className={s.Posts}>
        {posts
          ? posts.map((post, i) => (
              <Cards key={i} post={post} type={postType} />
            ))
          : null}
      </div>
    </main>
  );
}
