import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/header/Header";

export const Layout = () => {
  const { state } = useNavigation();

  return (
    <div className="flex flex-col items-center">
      <Header />
      {state === "loading" ? <span className="loading loading-spinner text-accent"></span> : <Outlet />}
    </div>
  );
};
