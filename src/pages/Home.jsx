import { useContext, useEffect } from "react";
import { CharactersCardContainer } from "../components/characters/CharactersCardContainer";
import { CharactersContext } from "../context/CharactersContext";
import { Pagination } from "../components/pagination/Pagination";
import { useSearchParams } from "react-router-dom";

function Home() {
  const { characters } = useContext(CharactersContext);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
  }, [searchParams]);

  const handleChange = (e) => {
    const filter = e.target.value;
    setSearchParams({ filter: filter });
  };

  return (
    <main>
      <input
        onChange={handleChange}
        type="text"
        value={searchParams.get("filter") ? searchParams.get("filter") : ""}
      />
      <Pagination />
      {characters?.length === 0 ? (
        <p>Cargando</p>
      ) : (
        <CharactersCardContainer
          characters={characters}
          searchParams={searchParams}
        />
      )}
    </main>
  );
}

export default Home;
