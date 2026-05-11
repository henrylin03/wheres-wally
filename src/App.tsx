import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { useState } from "react";
import Characters from "./components/Characters";
import Gameboard from "./components/Gameboard";
import Header from "./components/Header";
import useOutsideClick from "./hooks/useOutsideClick";
import { BEACH_MAP, type CharacterName } from "./mockData";
import "./styles/global.css";

const App = () => {
  const [charactersFound, setCharactersFound] = useState<CharacterName[]>([
    "wally",
  ]);
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const { imgSrc, locations } = BEACH_MAP;
  const namesOfCharactersToFind = locations.map(
    (location) => location.characterName,
  );

  const ref = useOutsideClick<HTMLImageElement>(() => setMenuIsVisible(false));

  return (
    <MantineProvider>
      <Header />

      <main>
        <Characters
          characterNames={namesOfCharactersToFind}
          charactersFound={charactersFound}
        />
        <Gameboard
          ref={ref}
          mapImg={imgSrc}
          characterNames={namesOfCharactersToFind}
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
          charactersFound={charactersFound}
          setCharactersFound={setCharactersFound}
        />
      </main>
    </MantineProvider>
  );
};

export default App;
