import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
  const [theme, setTheme] = useState("default");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <header className="mb-8 text-center flex justify-center items-center">
      <h1 className="text-4xl font-bold text-ui-header flex-1">Adaku</h1>
      <div className="flex justify-center items-center gap-2">
        <button
          onClick={() => setTheme("default")}
          className="h-8 w-8 bg-gray-300 rounded group hover:bg-gray-200 hover:cursor-pointer hover: transition-all ease-in-out "
        >
          <Sun className="mx-auto text-gray-600 group-hover:text-amber-500 " />
        </button>
        <button
          onClick={() => setTheme("dark")}
          className="h-8 w-8 bg-gray-300 rounded group hover:bg-gray-200 hover:cursor-pointer hover: transition-all ease-in-out "
        >
          <Moon className="mx-auto text-gray-600 group-hover:text-gray-700 " />
        </button>
      </div>
    </header>
  );
};

export default Header;
