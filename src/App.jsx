import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { useRoutes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signin from "./Pages/Signin";
const routes = [
  { path: "/", element: <Home /> },
  { path: "/Login", element: <Login /> },
  { path: "/Signin", element: <Signin /> },
  // {path:'',element:<h1></h1>},
];
function App() {
  const router = useRoutes(routes);
  return (
    <>
      <div className=""></div>
      {router}
    </>
  );
}

export default App;
