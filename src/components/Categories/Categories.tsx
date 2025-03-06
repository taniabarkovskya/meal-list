import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../api/recipes";
import { Link, useSearchParams } from "react-router-dom";
import { getSearchWith } from "../../utils/searchHelper";
import cn from "classnames";
import { CategoriesSkeleton } from "../CategoriesSkeleton";

export const Categories = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "";

  return (
    <div className="my-5">
      <h3 className="text-2xl text-orange-900 font-bold mb-2">
        Choose category:
      </h3>
      {!isLoading ? (
        <div className="flex gap-5 justify-between flex-wrap">
          <Link
            to={{
              search: getSearchWith(searchParams, { category: null }),
            }}
            className={cn(
              "bg-orange-800/30 text-md md:text-xl font-bold text-orange-900 p-2 rounded-md cursor-pointer hover:bg-orange-800/50 transition duration-300 ease-in-out",
              { "bg-orange-800/50": category === "" }
            )}
          >
            All
          </Link>
          {data?.map((categoryFilter) => (
            <Link
              key={categoryFilter.idCategory}
              to={{
                search: getSearchWith(searchParams, {
                  category: categoryFilter.strCategory,
                }),
              }}
              className={cn(
                "bg-orange-800/30 text-md md:text-xl font-bold text-orange-900 p-2 rounded-md cursor-pointer hover:bg-orange-800/50 transition duration-300 ease-in-out",
                { "bg-orange-800/50": category === categoryFilter.strCategory }
              )}
            >
              {categoryFilter.strCategory}
            </Link>
          ))}
        </div>
      ) : (
        <CategoriesSkeleton />
      )}
    </div>
  );
};
