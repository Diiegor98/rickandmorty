//FUNCIÓN QUE HACE EL FETCH A TODOS LOS PERSONAJES

export const getAllCharacters = async ({
  setCharacters,
  setPagination,
  url,
}) => {
  const res = await fetch(url);
  const data = await res.json();
  setCharacters(data.results);
  setPagination(data.info);
};
