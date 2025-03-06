export const RecipeCardSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl p-4 animate-pulse">
      <div className="w-full h-48 bg-gray-300"></div>
      <div className="p-4">
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
        <button className="mt-4 w-full h-10 bg-gray-300 rounded-lg"></button>
      </div>
    </div>
  );
};
