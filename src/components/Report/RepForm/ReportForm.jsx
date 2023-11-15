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
      <div className={style.radio}>
        <label className={style} htmlFor="visto">
          Visto
          <input type="radio" id="visto" value="visto" name="postType" />
        </label>
      </div>
      <div className={style.radio}>
        <label className={style} htmlFor="perdido">
          Perdido
          <span></span>
          <input type="radio" value="Perdido" name="postType" />
        </label>
      </div>

      <input type="file" accept="image/*" name="images" />
      {inputFields.map((field, index) => (
        <React.Fragment key={index}>
          <label className={style.Form__label} htmlFor={field}>
            {field}

            <input
              className={style.Form__input}
              type="text"
              name={field}
              maxLength="100"
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
      {/* <textarea
        className={style.Form__input}
        type="text"
        placeholder="Tell me, how can I help you?"
        name="message"
        maxLength="2000"
        required
      /> */}
      <button className={style.Form__btn} type="submit">
        ENVIAR REPORTE
      </button>
    </form>
  );
}
