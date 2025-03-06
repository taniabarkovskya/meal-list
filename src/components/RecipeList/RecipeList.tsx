import { useQuery } from "@tanstack/react-query";
import { getMeals } from "../../api/recipes";
import { useSearchParams } from "react-router-dom";
import { filterMeals } from "../../utils/filterMeals";
import { RecipeListSkeleton } from "../RecipeListSkeleton";
import { RecipeListWithPagination } from "../RecipeListWithPagination";

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
      {isLoading ? (
        <RecipeListSkeleton />
      ) : (
        filteredData?.length && data?.length && !isLoading ? (
          <RecipeListWithPagination meals={filteredData} itemsPerPage={6}/>
        ) : (
          <p className="text-center text-2xl text-orange-900 font-bold my-2">
            No recipes found mathing seaching criteria
          </p>
        )
      )}
    </>
  );
};
