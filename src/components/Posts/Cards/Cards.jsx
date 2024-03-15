import Image from "next/image";
import s from "./Cards.module.scss";
import Link from "next/link";

export default function Cards({ post, type }) {
  // Si es tipo perdido se cambian unas cosas
  // Si es tipo visto otra

  return (
    <Link href={`/posts/${post.id}`} className={s.Post}>
      <Image
        className={s.Post__img}
        src={post.photo}
        alt="a random dog"
        width={500}
        height={500}
      />
      <div className={s.Post__text}>
        {type === "perdidos" && (
          <span className={s.Post__name}>
            <h3>{post.name}</h3>
            <hr />
          </span>
        )}
        <span className={s.Post__specColor}>
          <h3>
            {post.especie} - {post.color}
          </h3>
        </span>
        <hr />
        <h3 className={s.Post__address}>{post.location}</h3>
        <hr />
        <span className={s.Post__time}>
          <h3>
            {post.date} - {post.time}
          </h3>
        </span>
      </div>
    </Link>
  );
}
