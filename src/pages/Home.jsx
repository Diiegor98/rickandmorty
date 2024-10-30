import { useContext, useEffect } from "react";
import { CharactersCardContainer } from "../components/characters/CharactersCardContainer";
import { CharactersContext } from "../context/CharactersContext";
import { Pagination } from "../components/pagination/Pagination";
import { useSearchParams } from "react-router-dom";

function Home() {
  const { characters } = useContext(CharactersContext);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {}, [searchParams]);

  const handleChange = (e) => {
    const filter = e.target.value;
    setSearchParams({ filter: filter });
  };

  return (
    <main>
      <Pagination />
      <hr />
      <input
        onChange={handleChange}
        type="text"
        placeholder="Buscar personaje"
        className="input input-bordered input-accent w-full max-w-xs mt-10"
        value={searchParams.get("filter") ? searchParams.get("filter") : ""}
      />
      {characters?.length === 0 ? (
        <span className="loading loading-spinner text-accent"></span>
      ) : (
        <CharactersCardContainer
          characters={characters}
          searchParams={searchParams}
        />
      )}
      <hr />
      <Pagination />
    </main>
  );
}

export default Home;
