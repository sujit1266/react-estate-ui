import HomePage from "./pages/HomePage/HomePage";
import ListPage from "./pages/ListPage/ListPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import SinglePage from "./pages/SinglePage/SinglePage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import ProfilePage from "./pages/ProfilePage/ProfilePage.jsx";
import Register from "./pages/Register/Register.jsx";
import Login from "./pages/Login/Login.jsx";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (<Layout/>),
      children : ([
        {
          path : "/",
          element: (<HomePage/>)
        },
        {
          path : "/list",
          element: (<ListPage/>)
        },
        {
          path : "/:id",
          element: (<SinglePage/>)
        },
        {
          path : "/loginpage",
          element: (<LoginPage/>)
        },
        {
          path : "/profile",
          element: (<ProfilePage/>)
        },
        {
          path : "/register",
          element: (<Register/>)
        },
        {
          path : "/login",
          element: (<Login/>)
        }
      ])
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App