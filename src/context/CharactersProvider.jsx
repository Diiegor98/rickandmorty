import { useEffect, useState } from "react";
import { CharactersContext } from "./CharactersContext";
import getAllCharacters from "../api/getAllCharacters";

export const CharactersProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [pagination, setPagination] = useState({});

  const fetchCharacters = async (url) => {
    const { initialCharacters, initialPagination } = await getAllCharacters(
      url
    );
    setCharacters(initialCharacters);
    setPagination(initialPagination);
  };

  useEffect(() => {
    fetchCharacters("https://rickandmortyapi.com/api/character");
  }, []);

  return (
    <CharactersContext.Provider
      value={{
        characters,

        pagination,
        fetchCharacters,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};
