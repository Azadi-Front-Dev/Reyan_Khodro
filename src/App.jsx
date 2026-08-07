import "./App.css";
import { useRoutes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signin from "./Pages/Signin";
import Mechanic from "./Pages/Mechanic";
const routes = [
  { path: "/", element: <Home /> },
  { path: "/Login", element: <Login /> },
  { path: "/Signin", element: <Signin /> },
  { path: "/services/mechanic", element: <Mechanic /> },

  // {path:'',element:<h1></h1>},
];
function App() {
  const router = useRoutes(routes);
  return (
    <>
      <div className="bg-blue-secoundry"></div>
      {router}
    </>
  );
}

export default App;
