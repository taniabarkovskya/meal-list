import { useQuery } from "@tanstack/react-query";
import { Meal } from "../../types/Meal";
import { RecipeCard } from "../../components/RecipeCard";

export const Favorites = () => {
  const { data: favorites } = useQuery({
    queryKey: ["favorites"],
    queryFn: () => JSON.parse(localStorage.getItem("favorites") || "[]"),
    initialData: [],
  });

  // Функція для підрахунку інгредієнтів
  const getTotalIngredients = (meals: Meal[]) => {
    const ingredientMap = new Map<string, number>();

    meals.forEach((meal) => {
      for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}` as keyof Meal] as string;
        const measure = meal[`strMeasure${i}` as keyof Meal] as string;

        if (ingredient && measure) {
          const key = `${ingredient} (${measure})`;
          ingredientMap.set(key, (ingredientMap.get(key) || 0) + 1);
        }
      }
    });

    return Array.from(ingredientMap.entries()).map(
      ([ingredient, count]) => `${ingredient} x${count}`
    );
  };

  const totalIngredients = getTotalIngredients(favorites);

  return (
    <div className="p-4">
      <h1 className="text-center text-4xl md:text-5xl lg:text-6xl text-orange-900 font-bold">
        Favorites
      </h1>

      {favorites.length === 0 ? (
        <p className="text-center text-2xl text-orange-900 font-bold my-10">
          No favorites yet.
        </p>
      ) : (
        <>
          <div className="bg-white p-4 rounded-2xl shadow-md my-6">
            <h2 className="text-2xl font-semibold text-orange-900 mb-2">
              Total Ingredients Needed:
            </h2>
            <ul className="mt-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-2 text-gray-700">
              {totalIngredients.map((item, index) => (
                <li key={index} className="bg-gray-100 p-2 rounded-lg">{item}</li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {favorites.map((meal: Meal) => (
              <div
                key={meal.idMeal}
                className="bg-white p-4 rounded-2xl shadow-md"
              >
                <RecipeCard meal={meal} />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold">Instructions:</h3>
                  <p>{meal.strInstructions}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
