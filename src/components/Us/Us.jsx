import React from "react";
import s from "./Us.module.scss";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import profile from "@assets/me.jpg";

export default function Us() {
  return (
    <main className={s.container}>
      <h2>¿Quiénes somos?</h2>
      <p>
        Somos apasionados amantes de los animales y creemos en la importancia de
        reunir a las mascotas con sus dueños. En Rastro Peludo, nos dedicamos a
        ayudar a las personas a encontrar a sus peludos amigos perdidos y
        reportar avistamientos de mascotas en su área.
      </p>
      <p>
        Buscamos crear una alternativa y una manera de crear publicaciones de
        animales perdidos desde un solo lugar que puedan compartirse y
        distribuirse en diferentes páginas y redes sociales que ya existen.
      </p>
      <h2>Valores y Mision</h2>
      <p>
        Nuestra pasión por las mascotas y nuestra comunidad nos impulsó a
        desarrollar esta plataforma para ayudar a reunir a las familias con sus
        peludos perdidos. Creemos que cada mascota merece un hogar seguro y
        amoroso. Nuestros Valores Compromiso con la seguridad y el bienestar de
        las mascotas. Colaboración con organizaciones locales y voluntarios.
        Empatía hacia los dueños preocupados y los animales extraviados.
      </p>
      <h2>Contacto</h2>
      <p>
        Por ahora solo estoy yo trabajando en la página pero si tienes forma de
        ayudar o quieres saber cómo podrías hacerlo no dudes en escribirme.
      </p>
      <div className={s.contact}>
        <Image
          className={s.profile}
          src={profile}
          alt="Foto autor"
          width={110}
          height={110}
        />
        <span className={s.contact__links}>
          <Link href="https://www.linkedin.com/in/federcor/" target="_blank">
            <FaLinkedin className={s.contact__links__link} />
          </Link>
          <Link href="https://github.com/mercuryeater" target="_blank">
            <FaGithub className={s.contact__links__link} />
          </Link>
        </span>
      </div>

      <p></p>
    </main>
  );
}
