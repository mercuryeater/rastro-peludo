import Image from "next/image"
import dog1 from '@assets/pets/dog1.jpg';
import dog2 from '@assets/pets/dog2.jpg';
import s from "./Posts.module.scss";

export default function Posts() {
  const mockPosts = [
    {
      especie: "Perro",
      foto: dog1,
      color: "Blanco y café",
      direccion: "Cra 19A # 127",
      fecha: "25/11/2023",
      hora: "10:30"
    },
    {
      especie: "Perro",
      foto: dog2,
      color: "Café con blanco",
      direccion: "Cll 126 # 30 - 25",
      fecha: "20/11/2023",
      hora: "17:10"
    }
  ]



  return (
    <div className={s.Posts}>
      {mockPosts.map((post, i) => (
        <div className={s.Post} key={i}>
          <Image src={post.foto} alt="a random dog" width={500} height={500} />
          <h3>{post.especie}</h3>
          <h3>{post.color}</h3>
          <h3>{post.direccion}</h3>
          <h3>{post.fecha}</h3>
          <h3>{post.hora}</h3>
        </div>
        ))}

    </div>
  );
}
