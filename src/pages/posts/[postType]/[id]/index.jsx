import { useRouter } from "next/router";
import Details from "@/components/Details/Details";
import Footer from "@/components/Footer/Footer";

import db from "@/db/db.json";

export async function getServerSideProps({ params }) {
  const { postType, id } = params;
  const seenPet = db.seen.find((pet) => parseInt(pet.id) === parseInt(id));
  if (seenPet) {
    return {
      props: { pet: seenPet },
    };
  }

  // Si no se encuentra en "seen", busca en el arreglo "lost"
  const lostPet = db.lost.find((pet) => parseInt(pet.id) === parseInt(id));
  if (lostPet) {
    return {
      props: { pet: lostPet },
    };
  }

  return {
    props: { pet: "PetNotFound" },
  };
}

export default function DetailsPage({ pet }) {
  const router = useRouter();
  const { postType, id } = router.query;
  return (
    <div>
      <Details postType={postType} pet={pet} />
      <Footer />
    </div>
  );
}
