//FUNCIÓN QUE HACE EL FETCH A TODOS LOS PERSONAJES

let URL_BASE = "https://rickandmortyapi.com/api/character";

export const getAllCharacters = async (setCharacters) => {
  const res = await fetch(URL_BASE);
  const data = await res.json();
  setCharacters(data.results);
};
