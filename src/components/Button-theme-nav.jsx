import React from "react";
import { useState, useEffect } from "react";


export function ButtonNav() {
  const [theme, setTheme] = useState("light");
  
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  },[theme]);

  const themeToggleSwitch = () => {
    setTheme(theme === "dark" ? "" : "dark");
  }

  return (
    <>
    <button color="black" id="themeToggle" className="bg-gray-500 w-8 h-8 dark:bg-red-700 py2 ml-4 lg:ml-0 rounded-md " onClick={themeToggleSwitch}> 
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg></button>
    </>
  );
}
