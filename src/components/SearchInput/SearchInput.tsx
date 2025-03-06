export const SearchInput = () => {
  return (
    <form className="w-full flex gap-1 my-2">
      <input
        type="search"
        className="border-2 border-orange-900 rounded-md px-2 py-1 w-full"
        placeholder="Search by name"
      />
      <button
        className="bg-orange-900 text-white p-2 rounded-lg cursor-pointer hover:bg-orange-800 transition-colors duration-300 ease-in-out"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};
