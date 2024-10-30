import notfound from "../../assets/404.png";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-8">
      <h2 className="text-3xl text-green-400">404 NOT FOUND</h2>
      <img className="w-80 h-80" src={notfound} alt="404 Not found" />
      <Link to="/">
        <button className="btn btn-outline btn-accent">VOLVER AL INICIO</button>
      </Link>
    </div>
  );
};
