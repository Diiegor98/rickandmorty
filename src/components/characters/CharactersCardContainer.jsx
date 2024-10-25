import { CardCharacters } from "./CardCharacters";

export const CharactersCardContainer = ({ characters }) => {
  return (
    <div>
      {characters?.map((char) => (
        <CardCharacters key={char.id} data={char} />
      ))}
    </div>
  );
};
