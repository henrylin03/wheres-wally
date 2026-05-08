import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import Header from "./components/Header";
import Gameboard from "./components/Gameboard";
import gameImg from "./assets/wheres-wally-beach.webp";

const App = () => {
  return (
    <MantineProvider>
      <Header />

      <main>
        <Gameboard imgSrc={gameImg} />
      </main>
    </MantineProvider>
  );
};

export default App;
