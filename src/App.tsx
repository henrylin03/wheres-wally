import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import Header from "./components/Header";

const App = () => (
  <MantineProvider>
    <Header />
  </MantineProvider>
);

export default App;
