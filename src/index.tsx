import { createRoot } from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import App from "./BookView";
import "./style.css";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <MantineProvider withGlobalStyles>
    <App />
  </MantineProvider>,
);
