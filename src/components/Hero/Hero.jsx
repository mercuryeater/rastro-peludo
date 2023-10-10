import style from "./Hero.module.scss";

export default function Hero({ title }) {
  return (
    <div className={style.Hero}>
      <h2 className={style.Hero__title}>{title}</h2>
      <section className={style.Hero__image}></section>
      <section className={style.Hero__image2}></section>
      <section className={style.Hero__image3}></section>
    </div>
  );
}
