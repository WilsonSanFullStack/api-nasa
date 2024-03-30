// use client para identificar un componente de cliente
"use client";
// importacion de herramientas 
import { useEffect, useState } from "react";
// importacion de inconos de react-icons
import { BiSolidMoon } from "react-icons/bi";
import { BiSolidSun } from "react-icons/bi";
// declaracion de componente funcional
const ThemeToggle = () => {
  // creacion de stado local
  const isClient = typeof window !== "undefined";
  const [darkMode, setDarkMode] = useState(
    isClient ? localStorage.getItem("theme") === "dark" : false
  );
// useEffect para menejar el estado local del darkMode
  useEffect(() => {
    // verificamos si es client
    if (isClient) {
      // identificamos el theme o si el darkmode es true o false
      if (darkMode) {
        // colocamos la class dark segun sea necesario
        document.documentElement.classList.add("dark");
        // guardamos el darkMode en el localstore
        localStorage.setItem("theme", "dark");
      } else {
        // quitamos la class dark y guardamos la class light en el localstore
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }
  }, [darkMode, isClient]);
// renderizado del toggle
  return (
    <div
      className="relative w-16 h-8 flex items-center dark:bg-gray-800 bg-teal-500 cursor-pointer rounded-full p-1"
      onClick={() => setDarkMode(!darkMode)}
    >
      <BiSolidMoon className="text-white" size={18} />
      <div
        className={`
        ${darkMode ? "right-0.5" : "left-0.5"}
        absolute bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"`}
      ></div>
      <BiSolidSun className="ml-auto text-yellow-400" size={18} />
    </div>
  );
};
// exportamos el componente
export default ThemeToggle;
