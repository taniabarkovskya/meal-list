import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl lg:text-6xl text-orange-900 font-bold mb-4">Welcome to Recipe App</h1>
        <p className="texl-lg md:text-xl text-gray-600 mb-6">Find and explore delicious recipes!</p>
        <Link
          to="/recipes"
          className="bg-orange-900 text-white py-2 px-6 rounded-lg text-lg hover:bg-orange-800 transition-colors duration-300 ease-in-out"
        >
          Go to Recipes
        </Link>
      </div>
    </div>
  );
};