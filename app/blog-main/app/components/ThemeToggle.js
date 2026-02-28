"use client";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="theme">
      {theme === "light" ? " Dark Mode" : " Light Mode"}
    </button>                                               
  );
}
