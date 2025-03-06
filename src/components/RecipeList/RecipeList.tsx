import { useQuery } from "@tanstack/react-query";
import { getMeals } from "../../api/recipes";
import { RecipeCard } from "../RecipeCard";
import { useSearchParams } from "react-router-dom";
import { filterMeals } from "../../utils/filterMeals";

export const RecipeList = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "";

  // , isLoading, isError
  const { data } = useQuery({
    queryKey: ["meals"],
    queryFn: getMeals,
  });

  const filteredData = filterMeals(data, category);

  return (
    <>
      {filteredData?.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
          {filteredData?.map((meal) => (
            <RecipeCard meal={meal} key={meal.idMeal} />
          ))}
        </div>
      ) : (
        <p className="text-center text-2xl text-orange-900 font-bold my-2">
          No recipes found in this category
        </p>
      )}
    </>
  );
};
