import { useEffect, useState } from "react";
import { Meal } from "../../types/Meal";
import ReactPaginate from "react-paginate";
import { RecipeCard } from "../RecipeCard";

type PropsType = {
  meals: Meal[];
  itemsPerPage: number;
};

export const RecipeListWithPagination: React.FC<PropsType> = ({
  meals,
  itemsPerPage,
}) => {
  const [itemOffset, setItemOffset] = useState(0);

  const [currentItems, setCurrentItems] = useState<Meal[]>([]);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(meals.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(meals.length / itemsPerPage));
  }, [itemsPerPage, itemOffset, meals]);

  interface PaginationAction {
    selected: number;
  }

  const handlePageClick = (event: PaginationAction) => {
    const newOffset = (event.selected * itemsPerPage) % meals.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
        {currentItems?.map((meal) => (
          <RecipeCard meal={meal} key={meal.idMeal} />
        ))}
      </div>

      <ReactPaginate
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="<"
        pageClassName="inline-flex items-center justify-center px-4 py-2 mx-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-200 focus:outline-none"
        pageLinkClassName="text-sm cursor-pointer"
        previousClassName="inline-flex items-center justify-center px-4 py-2 mx-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-200 focus:outline-none"
        previousLinkClassName="text-sm cursor-pointer"
        nextClassName="inline-flex items-center justify-center px-4 py-2 mx-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-200 focus:outline-none"
        nextLinkClassName="text-sm cursor-pointer"
        breakLabel="..."
        breakClassName="inline-flex items-center justify-center px-4 py-2 mx-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-200 focus:outline-none"
        breakLinkClassName="text-sm"
        containerClassName="flex justify-center items-center py-4"
        activeClassName="bg-gray-200 underline"
        renderOnZeroPageCount={null}
      />
    </>
  );
};
