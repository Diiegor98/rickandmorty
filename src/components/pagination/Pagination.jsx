import { useContext } from "react";
import { CharactersContext } from "../../context/CharactersContext";

export const Pagination = () => {

  const { pagination, fetchCharacters } = useContext(CharactersContext)

  return (
    <div className="flex justify-around items-center m-6">
      <button className="join-item btn btn-outline w-20" onClick={() => fetchCharacters(pagination.prev)} disabled={pagination.prev === null ? true : false}>
        Anterior
      </button>
      <button className="join-item btn btn-outline w-20" onClick={() => fetchCharacters(pagination.next)} disabled={pagination.next === null ? true : false}>Siguiente</button>
    </div>
  );
};
