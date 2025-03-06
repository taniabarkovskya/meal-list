export const RecipeDetailsSkeleton = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-2xl border border-gray-200 animate-pulse">
      <div className="h-10 w-24 bg-gray-300 rounded-lg mb-5"></div>
      <div className="w-full h-50 md:h-100 lg:h-150 bg-gray-300 rounded-lg"></div>
      <div className="h-8 bg-gray-300 rounded w-3/4 mt-5"></div>
      <div className="h-6 bg-gray-300 rounded w-1/2 mt-2"></div>

      <div className="mt-6">
        <div className="h-6 bg-gray-300 rounded w-1/4 mb-2"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="h-10 bg-gray-300 rounded-lg"></div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <div className="h-6 bg-gray-300 rounded w-1/4 mb-2"></div>
        <div className="h-24 bg-gray-300 rounded-lg"></div>
      </div>

      <div className="mt-6">
        <div className="h-6 bg-gray-300 rounded w-1/4 mb-2"></div>
        <div className="w-full h-50 md:h-80 lg:h-120 bg-gray-300 rounded-lg"></div>
      </div>
    </div>
  );
};