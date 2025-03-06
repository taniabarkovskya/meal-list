import { Categories } from "../../components/Categories";
import { RecipeList } from "../../components/RecipeList";
import { SearchInput } from "../../components/SearchInput/SearchInput";

export const RecipesAll = () => {
  return (
    <div>
      <h1 className="text-center text-4xl md:text-5xl lg:text-6xl text-orange-900 font-bold">Recipes</h1>
      <Categories />
      <SearchInput />
      <RecipeList />
    </div>
  );
};
