export const CategoriesSkeleton = () => {
  return (
    <div className="my-5">
      <div className="h-8 w-56 bg-gray-300 rounded mb-2 animate-pulse"></div>
      <div className="flex gap-5 justify-between flex-wrap">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="h-10 w-24 bg-gray-300 rounded-md animate-pulse"
          ></div>
        ))}
      </div>
    </div>
  );
};