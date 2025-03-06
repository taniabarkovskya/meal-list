import { StrictMode } from "react";
import App from "./App.tsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Favorites } from "./pages/Favorites";
import { RecipesAll } from "./pages/RecipesAll";
import { RecipeDetails } from "./pages/RecipeDetails";
import { NotFound } from "./pages/NotFound";
import { QueryProvider } from "./components/QueryProvider/QueryProvider.tsx";

export const Root = () => {
  return (
    <StrictMode>
      <QueryProvider>
        <Router>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="home" element={<Navigate to="/" replace />} />
              <Route path="recipes">
                <Route index element={<RecipesAll />} />
                <Route path=":recipeId" element={<RecipeDetails />} />
              </Route>
              <Route path="favorites" element={<Favorites />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Router>
      </QueryProvider>
    </StrictMode>
  );
};
