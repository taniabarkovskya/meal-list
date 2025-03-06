import axios from "axios";
import { Meal } from "../types/Meal";
import { Category } from "../types/Category";

// const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getMeals(query: string): Promise<Meal[]> {
  try {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    return response.data.meals;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to get all recipes");
  }
}

export async function getMealById(
  id: string | undefined
): Promise<Meal> {
  try {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    return response.data.meals[0];
  } catch (error) {
    console.error(error);
    throw new Error("Failed to get recipe by id");
  }
}

export async function getCategories(): Promise<Category[]> {
  try {
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    return response.data.categories;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to get categories");
  }
}