// import { useEffect } from "react";
// import axios from "axios";
import "./App.css";
import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  // useEffect(() => {
  //   axios
  //     .get("www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
  //     .then((response) => console.log(response));
  // }, []);

  return (
    <>
      <Header />
      <main className="container px-5 m-auto">
        <Outlet />
      </main>
    </>
  );
}

export default App;
