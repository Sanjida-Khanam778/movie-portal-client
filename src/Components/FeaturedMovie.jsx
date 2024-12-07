import React, { useContext, useEffect, useState } from "react";
import SingleMovie from "./SingleMovie";
import { NavLink } from "react-router-dom";
import { TbMovie } from "react-icons/tb";
import { AuthContext } from "../Provider/AuthProvider";

const FeaturedMovie = () => {
  const [featured, setFeatured] = useState([]);
  const {theme} = useContext(AuthContext)
  useEffect(() => {
    fetch("https://movie-portal-server-ten.vercel.app/featuredMovies")
      .then((res) => res.json())
      .then((data) => setFeatured(data));
  }, []);
  return (
    <div className="w-11/12 md:w-10/12 mx-auto my-24">
      <div className={`flex items-center justify-center flex-col ${
              theme === "dark" ? "text-white" : "text-black"
            }`}>
        <h2 className="text-5xl font-bold mb-3">Featured Movies</h2>
        <p className={`text-lg font-medium ${
              theme === "dark" ? "text-white" : "text-black"
            } text-opacity-55`}>
        Experience the Best: Handpicked the Top 6 Movies That Critics and Fans Love Alike with Outstanding Ratings.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 rounded-xl p-6 my-8">
        {featured.map((movie) => (
          <SingleMovie key={movie._id} movie={movie}></SingleMovie>
        ))}
      </div>
      <div className="w-full  flex items-center justify-center">
      <NavLink className='w-full md:w-1/3' to={`/allMovies`}> 
        <button className="btn text-lg w-full mx-auto bg-[#e02929] font-bold hover:bg-[#df1f1f] text-gray-100 rounded-lg py-2">
        See All Movies <TbMovie className="text-2xl"></TbMovie>
        </button>
      </NavLink>
      </div>
    </div>
  );
};

export default FeaturedMovie;
