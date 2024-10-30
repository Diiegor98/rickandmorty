import { Link } from "react-router-dom";

export const CardCharacters = ({ data }) => {
  const { name, gender, image, id } = data;

  return (
    <div className="card bg-base-100 w-52 shadow-xl truncate">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="p-2 flex flex-col items-center">
        <p className="text-xl font-semibold">{name}</p>
        <p className="font-light">{gender}</p>
        <Link to={`/character/${id}`}>
          <button className="mt-8 btn btn-sm btn-outline btn-accent">
            Ver personaje
          </button>
        </Link>
      </div>
    </div>
  );
};
