import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { LoadingProvider } from "./context/LoadingContext.tsx";
import { ThemeProvider } from "./context/ThemProvider.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <LoadingProvider>
        <App />
      </LoadingProvider>
    </ThemeProvider>
  </BrowserRouter>
);
