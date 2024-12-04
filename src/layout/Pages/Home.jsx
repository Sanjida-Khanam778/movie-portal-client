import React, { useState } from "react";
import Banner from "../Home/Banner";

const Home = () => {
  const [theme, setTheme] = useState("light");
  const handleToggle = (e) => {
    const newTheme = e.target.checked ? "synthwave" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div>
      
        <input
          type="checkbox"
          value={theme}
          onChange={handleToggle}
          className="toggle theme-controller"
        />
      <Banner></Banner>
    </div>
  );
};

export default Home;
