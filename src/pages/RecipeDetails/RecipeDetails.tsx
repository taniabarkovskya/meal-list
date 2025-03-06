import { getMealById } from "../../api/recipes";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Meal } from "../../types/Meal";

export const RecipeDetails = () => {
  const { recipeId } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["meal", recipeId],
    queryFn: () => getMealById(recipeId!),
    enabled: !!recipeId,
  });

  if (isLoading) return <p className="text-center text-lg">Завантаження...</p>;

  const ingredients = Array.from({ length: 20 }, (_, i) => ({
    ingredient: data?.[`strIngredient${i + 1}` as keyof Meal],
    measure: data?.[`strMeasure${i + 1}` as keyof Meal],
  })).filter((item) => item.ingredient);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-2xl border border-gray-200">
      <Link to='..' className="bg-gray-100 p-2 rounded-lg border border-gray-200 transition duration-300 ease-in-out hover:bg-gray-200">Back</Link>
      <img
        src={data?.strMealThumb}
        alt={data?.strMeal}
        className="w-full h-50 md:h-100 lg:h-150 object-cover rounded-lg shadow-md mt-5"
      />
      <h1 className="text-3xl font-bold text-gray-800 mt-4">{data?.strMeal}</h1>
      <p className="text-lg text-gray-600">
        {data?.strCategory} | {data?.strArea}
      </p>

      <h2 className="text-2xl font-semibold mt-6">Ingredients</h2>
      <ul className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
        {ingredients.map((item, index) => (
          <li key={index} className="bg-gray-100 p-2 rounded-lg">
            <strong>{item.measure}</strong> {item.ingredient}
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Instructions</h2>
      <p className="mt-2 text-gray-700 leading-relaxed">
        {data?.strInstructions}
      </p>

      {data?.strYoutube && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Video</h2>
          <iframe
            className="mt-2 w-full h-50 md:h-80 lg:h-120 rounded-lg"
            src={`https://www.youtube.com/embed/${
              data?.strYoutube.split("v=")[1]
            }`}
            title="Recipe Video"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};
