import { useLoaderData } from "react-router-dom";

export const CardDetail = () => {
  const { character } = useLoaderData();

  return (
    <div>
      <p>{character.name}</p>
      <p>{character.gender}</p>
      <img src={character.image} alt={character.name} />
    </div>
  );
};
