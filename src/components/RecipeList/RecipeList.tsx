import { useQuery } from "@tanstack/react-query";
import { getMeals } from "../../api/recipes";
import { RecipeCard } from "../RecipeCard";
import { useSearchParams } from "react-router-dom";
import { filterMeals } from "../../utils/filterMeals";
import { RecipeCardSkeleton } from "../RecipeCardSkeleton";

export const RecipeList = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "";
  const query = searchParams.get("query") || "";

  const { data, isLoading } = useQuery({
    queryKey: ["meals", query],
    queryFn: () => getMeals(query),
  });

  const filteredData = filterMeals(data, category);

  return (
    <>
      {filteredData?.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
          {!isLoading
            ? filteredData?.map((meal) => (
                <RecipeCard meal={meal} key={meal.idMeal} />
              ))
            : Array(6)
                .fill(0)
                .map((_, index) => (
                  <div key={index}>
                    <RecipeCardSkeleton />
                  </div>
                ))}
        </div>
      ) : (
        <p className="text-center text-2xl text-orange-900 font-bold my-2">
          No recipes found mathing seaching criteria
        </p>
      )}
    </>
  );
};
