import cn from "classnames";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const getLinkClass = ({ isActive }: { isActive: boolean }) => {
    return cn(
      " text-xl font-bold text-orange-900 p-2 rounded-md hover:text-orange-700 transition duration-300 ease-in-out",
      { "bg-orange-800/50": isActive }
    );
  };

  return (
    <header className="p-3 bg-orange-200">
      <nav className="flex gap-3 md:gap-10 justify-center">
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
