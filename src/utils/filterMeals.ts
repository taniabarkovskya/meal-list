import { Meal } from "../types/Meal";

export const filterMeals = (
  meals: Meal[] | undefined,
  currentCategory: string
) => {
  if (currentCategory) {
    return meals?.filter((meal) => meal.strCategory === currentCategory);
  }
  return meals;
};
