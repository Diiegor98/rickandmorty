import { Link } from "react-router-dom";
import { CardCharacters } from "./CardCharacters";

export const CharactersCardContainer = ({ characters, searchParams }) => {
  const filteredCharacters = characters.filter((item) => {
    const filter = searchParams.get("filter");
    const name = item.name.toLowerCase();
    if (!filter) {
      return true; // Si no hay filtro, muestra todos los personajes
    } else {
      return name.startsWith(filter.toLowerCase()); // Filtra por el nombre
    }
  });

  return (
    <div>
      {filteredCharacters.length === 0 ? ( // Verifica si hay personajes filtrados
        <p>Personaje no encontrado</p>
      ) : (
        filteredCharacters.map((char) => (
          <Link to={`/character/${char.id}`} key={char.id}>
            <CardCharacters data={char} />
          </Link>
        ))
      )}
    </div>
  );
};
