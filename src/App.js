import React, { useState } from "react";
import Switch from "@material-ui/core/Switch";
import "./styles.css";
import image from "./images/provider_pattern.JPG";
import image1 from "./images/provider_pattern_1.JPG";

import List from "./components/List";

const users = [
  { id: 100, name: "ABC", isActive: true },
  { id: 101, name: "DEF", isActive: false },
  { id: 102, name: "IJK", isActive: true },
];

const themes = {
  dark: { background: "#171717", color: "#fff" },
  light: { background: "#fff", color: "#000" },
};

export const ThemeContext = React.createContext();

export default function App() {
  const [theme, setTheme] = useState("light");
  const selectedTheme = themes[theme];

  const toggleTheme = () => {
    const selTheme = theme === "light" ? "dark" : "light";
    setTheme(selTheme);
  };

  //

  return (
    <div className="App">
      <h1>Provider Design Pattern</h1>
      <ThemeContext.Provider value={selectedTheme}>
        <Switch onChange={toggleTheme} />
        <List users={users} />
      </ThemeContext.Provider>

      <h2>
        Make data available to multiple child components
        <br />
        That’s basically it for the provider pattern. You have the Provider
        component that makes properties accessible in React’s context and
        components that consume the context.
      </h2>
      <img src={image} width={1200} height={1000} />
      <img src={image1} width={500} height={300} />

      <hr />
    </div>
  );
}
