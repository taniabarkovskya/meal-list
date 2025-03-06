import cn from "classnames";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const getLinkClass = ({ isActive }: { isActive: boolean }) => {
    return cn(
      "text-xl md:text-2xl font-bold text-orange-900 p-2 rounded-md hover:text-orange-800 transition duration-300 ease-in-out",
      { "bg-orange-800/30": isActive }
    );
  };

  return (
    <header className="p-5 bg-orange-900/50 flex gap-5 justify-center items-center">
      <nav className="flex gap-3 md:gap-5">
        <NavLink className={getLinkClass} to="/">
          Home
        </NavLink>
        <NavLink className={getLinkClass} to="/recipes">
          Recipes
        </NavLink>
        <NavLink className={getLinkClass} to="/favorites">
          Favorites
        </NavLink>
      </nav>
    </header>
  );
};
