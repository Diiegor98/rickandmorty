import { useLoaderData } from "react-router-dom";

export const CardDetail = () => {
  const { character } = useLoaderData();
  const { name, gender, image, status, location, episode, origin } = character;

  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt={name} />
        </figure>
        <div className="card-body gap-4">
          <h2 className="card-title text-4xl">{name}</h2>
          <div className="flex items-center justify-start gap-2">
            <span
              className={`w-3 h-3 rounded-full ${
                status === "Alive" ? "bg-green-400" : "bg-red-400"
              }`}
            ></span>
            <p className="text-white font-semibold">
              {status} - {gender}
            </p>
          </div>
          <div>
            <p className="text-lg text-white font-semibold">Origen</p>
            <p>{origin.name}</p>
          </div>
          <div>
            <p className="text-lg text-white font-semibold">Ubicación</p>
            <p>{location.name}</p>
          </div>
          <div>
            <p className="text-lg text-white font-semibold">Episodios</p>
            <p>{episode.length}</p>
          </div>
        </div>
      </div>
    </>
  );
};
