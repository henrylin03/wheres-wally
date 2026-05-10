import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { useState } from "react";
import Characters from "./components/Characters";
import Gameboard from "./components/Gameboard";
import Header from "./components/Header";
import useOutsideClick from "./hooks/useOutsideClick";
import { BEACH_MAP } from "./mockData";
import "./styles/global.css";

const App = () => {
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
        <Characters characterNames={namesOfCharactersToFind} />
        <Gameboard
          mapImg={imgSrc}
          characterNames={namesOfCharactersToFind}
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
          ref={ref}
        />
      </main>
    </MantineProvider>
  );
};

export default App;
