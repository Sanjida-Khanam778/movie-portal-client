import React, { useContext } from "react";
import { BiCategory } from "react-icons/bi";
import { FaCalendarAlt, FaClock, FaStar } from "react-icons/fa";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { MdDeleteForever, MdFavorite, MdSummarize } from "react-icons/md";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { GrUpdate } from "react-icons/gr";

const Details = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const movie = useLoaderData();
  const navigate = useNavigate();
  const { _id, poster, title, duration, genre, year, rating, summary } = movie;
  const handleDelete = (id) => {
    fetch(`https://movie-portal-server-ten.vercel.app/movies/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "Are you sure?",
          text: "Do you want to delete this permanently?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Deleted!",
              text: "Your movie has been deleted.",
              icon: "success",
            });
            if (data.deletedCount > 0) {
              navigate("/allMovies");
            }
          }
        });
      });
  };

  const handleFavorites = () => {
    const favorites = {
      email,
      poster,
      title,
      duration,
      genre,
      year,
      rating,
    };
    fetch("https://movie-portal-server-ten.vercel.app/favorites", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(favorites),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Congrates!",
            text: "Movie added to favorite list successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center my-12">
      <div className="w-11/12 sm:w-3/4 lg:w-1/2 bg-white p-4 md:p-8 rounded-2xl shadow-lg">
        <div>
          <img
            className="rounded-2xl w-full h-84 object-cover"
            src={poster}
            alt="Movie Poster"
          />
        </div>

        <div className="space-y-6 mt-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            {title}
          </h2>

          <div className="w-full mx-auto">
            <div className="w-5/6 mx-auto space-y-4">
              <div className=" flex items-start text-lg text-gray-600">
                <div className="flex items-center">
                  <BiCategory className="mr-2 text-yellow-500" />

                  <span className="font-semibold mr-2">Genre:</span>
                </div>
                <div className="flex items-start">
                  <span className="ml-1">
                    {genre.map((item, idx) => (
                      <li key={idx} className="mr-1">
                        {item}
                      </li>
                    ))}
                  </span>
                </div>
              </div>

              <p className="flex items-center text-lg text-gray-600">
                <FaClock className="mr-2 text-indigo-500" />
                <span className="font-semibold">Duration:</span>
                <span className="ml-2">{duration} minutes</span>
              </p>

              <p className="flex items-center text-lg text-gray-600">
                <FaCalendarAlt className="mr-2 text-green-500" />
                <span className="font-semibold">Release Year:</span>
                <span className="ml-2">{year}</span>
              </p>

              <p className="flex items-center text-lg">
                <FaStar className="mr-2 text-yellow-500" />
                <span className="font-semibold text-gray-600">Rating:</span>
                <Rating
                  size={20}
                  readonly
                  initialValue={rating}
                  className="ml-2"
                />
              </p>

              <p className="flex items-center text-lg text-gray-600">
                <MdSummarize className="mr-2 text-teal-500" />
                <span className="font-semibold">Summary:</span>
                <span className="ml-2">{summary}</span>
              </p>
            </div>

            <div className="flex flex-col w-5/6 mx-auto justify-between font-bold text-lg">
              <div className="flex justify-between gap-4">
                <button
                  onClick={() => handleDelete(_id)}
                  className="w-full mt-5 flex items-center justify-center py-2 text-white bg-red-500 rounded-lg shadow hover:bg-red-600 transition"
                >
                  Delete Movie
                  <MdDeleteForever className="text-2xl md:ml-2"></MdDeleteForever>
                </button>
                <button
                  onClick={handleFavorites}
                  className="w-full py-2 text-white flex items-center mt-5 justify-center bg-blue-500 rounded-lg shadow hover:bg-blue-600 transition"
                >
                  Add to Favorite
                  <MdFavorite className="text-2xl md:ml-2"></MdFavorite>
                </button>
              </div>
              <Link to={`/update/${_id}`}>
                <button className="w-full py-2 text-white flex items-center mt-5 justify-center bg-green-500 rounded-lg shadow hover:bg-green-600 transition">
                  Update Movie <GrUpdate className="text-xl ml-3"></GrUpdate>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
