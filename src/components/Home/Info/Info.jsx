import style from "./Info.module.scss";

export default function Info() {
  // Atribuciones de las imagenes para poner en el footer
  // <a href="https://www.freepik.com/free-vector/pet-logo-design-paw-vector-animal-shop-business_18246195.htm#query=dog&position=1&from_view=keyword&track=sph">Image by rawpixel.com</a> on Freepik
  // <a href="https://www.freepik.com/free-vector/cute-mascots-pet-shop-icons_5141839.htm#query=dog&position=26&from_view=keyword&track=sph">Image by studiogstock</a> on Freepik
  // Imagen de <a href="https://www.freepik.es/vector-gratis/gente-ilustracion-plana-lindas-mascotas_14213072.htm#page=2&query=mujer%20y%20gato&position=13&from_view=search&track=ais">Freepik</a>

  const text = `¿Viste un peludo solitario por la ciudad y no pudiste ayudarlo en ese momento?
  <br />
  Reporta esos encuentros y contribuye a la creación de un rastro que conduzca a su rescate.`;

  return (
    <div className={style.Info}>
      <h3 className={style.Info__text}>
        ¿Viste un peludo solitario por la ciudad y no pudiste ayudarlo en ese
        momento?
      </h3>
      <h3 className={style.Info__text}>
        Reporta esos encuentros y contribuye a la creación de un rastro que
        conduzca a su rescate.
      </h3>
      <div className={style.Info__img}></div>
    </div>
  );
}
