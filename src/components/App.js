import React, { useState } from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";
import Filter from "./Filter";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function Dark() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className={isDarkMode ? "dark" : "light"}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={ () => {Dark}} />
      <ShoppingList />
    </div>
  );
}

export default App;
