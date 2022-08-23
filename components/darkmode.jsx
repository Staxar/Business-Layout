import React, { useEffect, useRef } from "react";
const DarkMode = () => {
  let clickedClass = "clicked";
  const lightTheme = "light-theme";
  const darkTheme = "dark-theme";
  const theme = useRef();
  useEffect(() => {
    if (localStorage) {
      theme.current = localStorage.getItem("theme");
    }

    if (theme.current === lightTheme || theme.current === darkTheme) {
      document.body.classList.add(theme.current);
    } else {
      document.body.classList.add(lightTheme);
    }
  }, []);

  const switchTheme = (e) => {
    if (theme.current === darkTheme) {
      document.body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "light-theme");
      theme.current = lightTheme;
    } else {
      document.body.classList.replace(lightTheme, darkTheme);
      e.target.classList.add(clickedClass);
      localStorage.setItem("theme", "dark-theme");
      theme.current = darkTheme;
    }
  };

  return (
    <button
      className={theme.current === "dark-theme" ? clickedClass : ""}
      id="darkMode"
      onClick={(e) => switchTheme(e)}
      name="changeTheme"
      type="button"
    ></button>
  );
};

export default DarkMode;
