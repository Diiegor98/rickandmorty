import { useEffect, useState } from "react";
import { Navbar } from "./components/navbar/Navbar";
import { getAllCharacters } from "./helpers/getAllCharacters";
import { CharactersCardContainer } from "./components/characters/CharactersCardContainer";
import { Pagination } from "./components/pagination/Pagination";

function App() {
  const [characters, setCharacters] = useState([]);
  const [pagination, setPagination] = useState({});

  useEffect(() => {
    let url = "https://rickandmortyapi.com/api/character";

    getAllCharacters({ url, setCharacters, setPagination });
  }, []);

  const onNextPage = () => {
    const url = pagination.next;
    getAllCharacters({ url, setCharacters, setPagination });
  };

  const onPreviousPage = () => {
    const url = pagination.prev;
    getAllCharacters({ url, setCharacters, setPagination });
  };

  return (
    <>
      <Navbar />
      <Pagination onNextPage={onNextPage} onPreviousPage={onPreviousPage} pagination={pagination} />
      <CharactersCardContainer characters={characters} />
    </>
  );
}

export default App;
