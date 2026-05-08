import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import Header from "./components/Header";
import Gameboard from "./components/Gameboard";
import { BEACH_MAP } from "./mockData";

const App = () => (
  <MantineProvider>
    <Header />

    <main>
      <Gameboard map={BEACH_MAP} />
    </main>
  </MantineProvider>
);

export default App;
