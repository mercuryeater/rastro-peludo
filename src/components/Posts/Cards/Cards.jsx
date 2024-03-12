import Image from "next/image";
import s from "./Cards.module.scss";

export default function Cards({ post, type }) {
  // Si es tipo perdido se cambian unas cosas
  // Si es tipo

  return (
    <div className={s.Post}>
      <Image
        className={s.Post__img}
        src={post.foto}
        alt="a random dog"
        width={500}
        height={500}
      />
      <div className={s.Post__text}>
        <span className={s.Post__specColor}>
          <h3>
            {post.especie} - {post.color}
          </h3>
        </span>
        <hr />
        <h3 className={s.Post__address}>{post.direccion}</h3>
        <hr />
        <span className={s.Post__time}>
          <h3>
            {post.fecha} - {post.hora}
          </h3>
        </span>
      </div>
    </div>
  );
}
