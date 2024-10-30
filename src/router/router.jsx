import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import { Layout } from "../layout/Layout";
import { CardDetail } from "../components/characters/CardDetail";
import { NotFound } from "../pages/NotFound";
import { getCharacterById } from "../api/getCharacterById";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/character/:id",
        element: <CardDetail />,
        loader: getCharacterById,
      },
    ],
  },
]);
