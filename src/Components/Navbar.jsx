import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import './Navbar.css'

const Navbar = () => {
  const { user, handleSignOut } = useContext(AuthContext);
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/allMovies"}>All Movies</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to={"/addMovie"}>Add Movie</NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink to={"/myFavorites"}>My Favorites</NavLink>
        </li>
      )}
      <li>
        <NavLink to={"/extra"}>Extra</NavLink>
      </li>
    </>
  );
  return (
    <div className="w-10/12 mx-auto text-white">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="font-bold text-4xl text-[#e02929]">FilmyScope</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-5 font-medium px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user && user?.email ? (
            <>
              <div className="relative group mr-3">
                <img src={user?.photoURL} className="h-12 w-12 rounded-full" />
                <div className="absolute z-10 w-32 -bottom-8 -right-10 transform -translate-x-1/2 bg-white text-black text-sm px-3 py-1 opacity-0 group-hover:opacity-100 transition duration-300">
                  {user?.displayName}
                </div>
              </div>
              <Link onClick={handleSignOut}><button className="btn bg-[#df1f1f] hover:bg-[#df1f1f] text-white border-none">Logout</button></Link>
            </>
          ) : (
            <>
              <Link className=" mr-3" to={"/login"}>
                <button className="btn bg-[#df1f1f] hover:bg-[#df1f1f] text-white border-none">Login</button>
              </Link>
              <Link className="" to={"/register"}>
                <button className="btn bg-[#df1f1f] hover:bg-[#df1f1f] text-white border-none">Register</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
