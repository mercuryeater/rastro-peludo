import React from "react";
import style from "./ReportForm.module.scss";

export default function ReportForm() {
  const inputFields = [
    "Especie del peludo",
    "Nombre del peludo",
    "Color(es)",
    "Raza",
    "Edad",
    "Hora",
    "Lugar",
    "Descripción",
    "Nombre de contacto",
    "Teléfono",
  ];

  const sendForm = (e) => {
    e.preventDefault();
    console.log("form sended");
  };
  return (
    <form className={style.Form} onSubmit={sendForm}>
      <h3>¿Es un peludo visto o perdido?</h3>
      <div className={style.Form__radioContainer}>
        <div className={style.Form__radio}>
          <label className={style.Form__radio__label} htmlFor="visto">
            <input
              className={style.Form__radio__input}
              type="radio"
              id="visto"
              value="visto"
              name="postType"
            />
            <span className={style.Form__radio__checkmark} />
            Visto
          </label>
        </div>
        <div className={style.Form__radio}>
          <label className={style.Form__radio__label} htmlFor="perdido">
            <input
              className={style.Form__radio__input}
              type="radio"
              id="perdido"
              value="perdido"
              name="postType"
            />
            <span className={style.Form__radio__checkmark} />
            Perdido
          </label>
        </div>
      </div>

      {/*Aca delante este input seria chevere hacerlo mas estetico
          con una imagen de fondo y que permita drag and drop  */}
      <label htmlFor="images">
        Fotos del peludo
        <input
          className={style.Form__inputImage}
          id="images"
          name="images"
          type="file"
          accept="image/*"
          required
        />
      </label>

      {inputFields.map((field, index) => (
        <React.Fragment key={index}>
          <label className={style.Form__label} htmlFor={field}>
            {field}

            <input
              className={style.Form__input}
              type="text"
              name={field}
              maxLength="100"
              required
            />
          </label>
        </React.Fragment>
      ))}
      {/* <input
        className={style.Form__input}
        type="email"
        placeholder="Email address"
        name="email"
        maxLength="100"
        required
      /> */}
      <label className={style.Form__label} htmlFor="descripcion">
        Descripción
        <textarea
          className={style.Form__textArea}
          type="text"
          placeholder="¿Cómo pasó todo?"
          id="descripcion"
          name="descripcion"
          maxLength="2000"
          required
        />
      </label>

      <button className={style.Form__btn} type="submit">
        ENVIAR REPORTE
      </button>
    </form>
  );
}
