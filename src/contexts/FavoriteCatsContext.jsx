import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const FavoriteCatsContext = createContext();

function FavoriteCatsContextProvider({ children }) {
  const [favoriteCats, setFavoriteCats] = useState(function () {
    const storedValue = localStorage.getItem("favoriteCats");
    return storedValue ? JSON.parse(storedValue) : [];
  });

  useEffect(
    function () {
      localStorage.setItem("favoriteCats", JSON.stringify(favoriteCats));
    },
    [favoriteCats],
  );

  function handleAddDeleteFavorite(cat) {
    const isCatFavorite = favoriteCats.find((el) => el.id === cat.id);
    
    if (!isCatFavorite) {
      setFavoriteCats((cats) => [...cats, cat]);
    } else {
      setFavoriteCats((cats) => cats.filter((el) => el.id !== cat.id));
    }
  }

  return (
    <FavoriteCatsContext.Provider
      value={{ favoriteCats, handleAddDeleteFavorite }}
    >
      {children}
    </FavoriteCatsContext.Provider>
  );
}

function useFavoriteCats() {
  const context = useContext(FavoriteCatsContext);
  if (context === undefined)
    throw new Error("Favorite Cats Context was used outside of context area");
  return context;
}

export { useFavoriteCats, FavoriteCatsContextProvider };
