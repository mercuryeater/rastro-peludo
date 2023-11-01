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
    "Información relevante",
  ];

  const sendForm = (e) => {
    e.preventDefault();
    console.log("form sended");
  };
  return (
    <form className={style.Form} onSubmit={sendForm}>
      {inputFields.map((field, index) => (
        <React.Fragment key={index}>
          <label className={style.Form__label} htmlFor={field}>
            {field}
          </label>
          <input
            className={style.Form__input}
            type="text"
            name={field}
            maxLength="100"
          />
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
