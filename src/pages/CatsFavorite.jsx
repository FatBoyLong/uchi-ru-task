import { useFavoriteCats } from "../contexts/FavoriteCatsContext";
import CatCard from "../ui/CatCard";

function CatsFavorite() {
  const { favoriteCats } = useFavoriteCats();

  return (
    <div className=" m-auto grid max-w-7xl grid-cols-1 gap-10 pt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {favoriteCats.map((el) => (
        <CatCard cat={el} key={el.id} />
      ))}
    </div>
  );
}

export default CatsFavorite;
