import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.jsx";
import { CharactersProvider } from "./context/CharactersProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CharactersProvider>
      <RouterProvider router={router} />
    </CharactersProvider>
  </StrictMode>
);
