import { useContext } from "react";
import { CharactersContext } from "../../context/CharactersContext";

export const Pagination = () => {

  const { pagination, fetchCharacters } = useContext(CharactersContext)

  return (
    <div>
      <button onClick={() => fetchCharacters(pagination.prev)} disabled={pagination.prev === null ? true : false}>
        Anterior
      </button>
      <button onClick={() => fetchCharacters(pagination.next)} disabled={pagination.next === null ? true : false}>Siguiente</button>
    </div>
  );
};
