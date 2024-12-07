import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Login from "../layout/Pages/Login";
import Register from "../layout/Pages//Register";
import PrivateRoute from "../Components/PrivateRoute";
import Home from "../layout/Pages/Home";
import AllMovies from "../layout/Pages/AllMovies";
import AddMovies from "../layout/Pages/AddMovies";
import MyFavorites from "../layout/Pages/MyFavorites";
import ErrorPage from "../layout/Pages/ErrorPage";
import Details from "../layout/Pages/Details";
import UpdateMovie from "../layout/Pages/UpdateMovie";
import Contact from "../layout/Pages/Contact";

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
          element: <AllMovies></AllMovies>,
          loader: ()=>fetch('https://movie-portal-server-ten.vercel.app/movies')
        },
        {
          path:'/details/:id',
          element: <PrivateRoute><Details></Details></PrivateRoute>,
          loader: ({params})=>fetch(`https://movie-portal-server-ten.vercel.app/movies/${params.id}`)
        },
        {
          path: 'addMovie',
          element: <PrivateRoute><AddMovies></AddMovies></PrivateRoute>
        },
        {
          path: '/favorites/:email',
          element: <PrivateRoute><MyFavorites></MyFavorites></PrivateRoute>,
          loader: ({params})=>fetch(`https://movie-portal-server-ten.vercel.app/favorites/${params.email}`)
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        },
        {
          path: '/update/:id',
          element: <PrivateRoute><UpdateMovie></UpdateMovie></PrivateRoute>,
          loader: ({params})=>fetch(`https://movie-portal-server-ten.vercel.app/movies/${params.id}`)
        }
    ]
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  }
]);

export default router;
