import { Outlet, useNavigation } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";

export const Layout = () => {
  const { state } = useNavigation();

  return (
    <div>
      <Navbar />
      {state === "loading" ? <p>Cargando</p> : <Outlet />}
    </div>
  );
};
