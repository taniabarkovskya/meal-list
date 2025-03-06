import { useQuery } from "@tanstack/react-query";
import { Meal } from "../../types/Meal";
import { RecipeCard } from "../../components/RecipeCard";

export const Favorites = () => {
  const { data: favorites } = useQuery({
    queryKey: ["favorites"],
    queryFn: () => JSON.parse(localStorage.getItem("favorites") || "[]"),
    initialData: [],
  });

  const getIngredients = (meal: Meal) => {
    const ingredients: string[] = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}` as keyof Meal];
      const measure = meal[`strMeasure${i}` as keyof Meal];
      if (ingredient && measure) {
        ingredients.push(`${ingredient} - ${measure}`);
      }
    }
    return ingredients.join(", ");
  };

  return (
    <div className="p-4">
      <h1 className="text-center text-4xl md:text-5xl lg:text-6xl text-orange-900 font-bold">
        Favorites
      </h1>
      {favorites.length === 0 ? (
        <p className="text-center text-2xl text-orange-900 font-bold my-10">No favorites yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map((meal: Meal) => (
            <div
              key={meal.idMeal}
              className="bg-white p-4 rounded-2xl shadow-md"
            >
              <RecipeCard meal={meal} />
              <div className="mt-4">
                <h3 className="text-xl font-semibold">Ingredients:</h3>
                <p>{getIngredients(meal)}</p>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold">Instructions:</h3>
                <p>{meal.strInstructions}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
