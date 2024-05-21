import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContextProvider from "./context/Context.jsx";

const root = document.getElementById("root");

if (root) {
  const rootElement = createRoot(root);
  rootElement.render(
    <ContextProvider>
      <App />
    </ContextProvider>
  );
} else {
  console.error("Root element not found in the document.");
}
