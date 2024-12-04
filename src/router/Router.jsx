import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Login from "../layout/Pages/Login";
import Register from "../layout/Pages//Register";
import PrivateRoute from "../Components/PrivateRoute";
import Home from "../layout/Pages/Home";
import AllMovies from "../layout/Pages/AllMovies";
import AddMovies from "../layout/Pages/AddMovies";
import MyFavorites from "../layout/Pages/MyFavorites";
import Extra from "../layout/Pages/Extra";
import ErrorPage from "../layout/Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/allMovies',
          element: <AllMovies></AllMovies>
        },
        {
          path: 'addMovie',
          element: <PrivateRoute><AddMovies></AddMovies></PrivateRoute>
        },
        {
          path: 'myFavorites',
          element: <PrivateRoute><MyFavorites></MyFavorites></PrivateRoute>
        },
        {
          path: 'extra',
          element: <Extra></Extra>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        }
    ]
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  }
]);

export default router;
