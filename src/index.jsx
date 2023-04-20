// main tools
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// main page
import { BrowserRouter } from "react-router-dom";
import './Styles/index.css'
import './Styles/animation.css'
import App from './app'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
