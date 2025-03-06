import "./App.css";
import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main className="container p-5 m-auto">
        <Outlet />
      </main>
    </>
  );
}

export default App;
