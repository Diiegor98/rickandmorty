import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar">
      <Link to="/" className="btn btn-ghost text-xl">Rick & Morty</Link>
    </div>
  );
};

export default Header;
