import { useEffect } from "react";
import { useState } from "react";
import CatCard from "../ui/CatCard";

function CatsMain() {
  const [catsList, setCatsList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);

  useEffect(
    function () {
      async function getCats() {
        try {
          const res = await fetch(
            `https://api.thecatapi.com/v1/images/search?limit=20&page=${currentPage}`,
            {
              method: "GET",
              headers: {
                "x-api-key":
                  "live_2fFyQCMQH8QSsdNav4QtvgJ4XZjJqVCAAFHnn3KjKMHGfkzHJIEaBvHTFttCYTqP",
              },
            },
          );

          const data = await res.json();
          setCatsList((cats) => [...cats, ...data]);
          setCurrentPage((page) => page + 1);
        } catch (err) {
        } finally {
          setFetching(false);
        }
      }

      if (fetching) {
        getCats();
      }
    },
    [fetching],
  );

  useEffect(function () {
    document.addEventListener("scroll", handleScroll);

    return function () {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleScroll(e) {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
    }
  }

  return (
    <div className=" m-auto grid max-w-7xl grid-cols-1 gap-10 pt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {catsList.map((el) => (
        <CatCard cat={el} key={el.id} />
      ))}
      {fetching && (
        <div className="col-span-1 text-center sm:col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4 2xl:col-span-5">
          <p className="text-center text-gray-700">
            ...загружаем еще котиков...
          </p>
        </div>
      )}
    </div>
  );
}

export default CatsMain;
