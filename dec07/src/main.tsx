import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Counter } from "./counter.tsx";
import { App } from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Counter />
  </StrictMode>,
);
