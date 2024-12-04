import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../layout/Home";
import AllMovies from "../layout/AllMovies";
import AddMovies from "../layout/AddMovies";
import MyFavorites from "../layout/MyFavorites";
import Extra from "../layout/Extra";
import Login from "../layout/Login";
import Register from "../layout/Register";
import PrivateRoute from "../Components/PrivateRoute";

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
]);

export default router;
