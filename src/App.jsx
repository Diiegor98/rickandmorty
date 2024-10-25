import { useEffect, useState } from "react";
import { Navbar } from "./components/navbar/Navbar";
import { getAllCharacters } from "./helpers/getAllCharacters";
import { CharactersCardContainer } from "./components/characters/CharactersCardContainer";

function App() {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    getAllCharacters(setCharacters);
  }, []);

  return (
    <>
      <Navbar />
      <CharactersCardContainer characters={characters} />
    </>
  );
}

export default App;
