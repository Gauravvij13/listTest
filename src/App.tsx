import React from "react";
import "./App.css";
import "tailwindcss/tailwind.css";
import { composeComponents } from "utils/component";
import { AppProvider } from "context/AppContext";
import ListSection from "modules/ListSection";

function App() {
  const Providers = composeComponents(AppProvider);
  return (
    <Providers>
      <ListSection />
    </Providers>
  );
}

export default App;
