import { RecipeCardSkeleton } from "../RecipeCardSkeleton";

export const RecipeListSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
      {Array(6)
        .fill(0)
        .map((_, index) => (
          <div key={index}>
            <RecipeCardSkeleton />
          </div>
        ))}
    </div>
  );
};
