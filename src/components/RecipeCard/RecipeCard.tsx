import { Link } from "react-router-dom";
import { Meal } from "../../types/Meal";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

type Props = {
  meal: Meal;
};

export const RecipeCard: React.FC<Props> = (props) => {
  const { meal } = props;

  const queryClient = useQueryClient();

  const getFavorites = () => JSON.parse(localStorage.getItem("favorites") || "[]");

  const [isAdded, setIsAdded] = useState(
    getFavorites().some((item: Meal) => item.idMeal === meal.idMeal)
  );

  const handleToggleFavorite = () => {
    let favorites = getFavorites();

    if (isAdded) {
      // Видаляємо обраний рецепт зі списку
      favorites = favorites.filter((item: Meal) => item.idMeal !== meal.idMeal);
    } else {
      // Додаємо рецепт до обраних
      favorites.push(meal);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    queryClient.setQueryData(["favorites"], favorites);
    setIsAdded(!isAdded);
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl p-4">
      <img
        src={`${meal.strMealThumb}/preview`}
        alt={`Image of meal ${meal.strMeal}`}
        className="w-full h-48 object-contain"
      />
      <div className="p-4">
        <Link
          to={`/recipes/${meal.idMeal}`}
          className="text-xl font-semibold text-gray-800"
        >
          {meal.strMeal}
        </Link>
        <p className="text-sm text-gray-500">
          {meal.strCategory} | {meal.strArea}
        </p>
        <button
          className="mt-4 w-full bg-orange-900 text-white py-2 rounded-lg cursor-pointer hover:bg-orange-800 transition-colors duration-300 ease-in-out"
          onClick={handleToggleFavorite}
        >
          {isAdded ? "Added" : "Add to favorites"}
        </button>
      </div>
    </div>
  );
};
