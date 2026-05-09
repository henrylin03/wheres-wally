import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import Characters from "./components/Characters";
import Gameboard from "./components/Gameboard";
import Header from "./components/Header";
import { BEACH_MAP } from "./mockData";

const App = () => {
  const { imgSrc, locations } = BEACH_MAP;
  const namesOfCharactersToFind = locations.map(
    (location) => location.characterName,
  );

  return (
    <MantineProvider>
      <Header />

      <main>
        <Characters characterNames={namesOfCharactersToFind} />
        <Gameboard mapImg={imgSrc} characterNames={namesOfCharactersToFind} />
      </main>
    </MantineProvider>
  );
};

export default App;
