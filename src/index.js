// main tools
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// main page
import Home from "./Pages/Home/Home";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Home />
  </StrictMode>
);
