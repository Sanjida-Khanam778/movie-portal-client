import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleMovie from "../../Components/SingleMovie";

const AllMovies = () => {
  const data = useLoaderData();
  const [movies, setMovies] = useState(data);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch(
      `https://movie-portal-server-ten.vercel.app/movies?searchParams=${search}`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, [search]);
  return (
    <div className="w-10/12 mx-auto">
      <label className="input input-bordered flex items-center gap-2 mt-8 w-1/3 mx-auto">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="grow"
          placeholder="Search"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
      {
        (movies? (
          <div className="min-h-[51vh] flex justify-center items-center"><p className="text-5xl font-bold"> No Movies to show</p></div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 rounded-xl p-6 my-12">
            {movies.map((movie) => (
              <SingleMovie key={movie._id} movie={movie}></SingleMovie>
            ))}
          </div>
        ))
      }
    </div>
  );
};

export default AllMovies;