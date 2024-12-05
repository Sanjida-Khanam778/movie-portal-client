import React from "react";
import { BiCategory } from "react-icons/bi";
import { FaCalendarAlt, FaClock, FaStar } from "react-icons/fa";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { MdSummarize } from "react-icons/md";

const Details = () => {
  const { id } = useParams();
  const movie = useLoaderData();
  const navigate = useNavigate()
  const { _id, poster, title, duration, genre, year, rating, summary } = movie;

//   console.log(movie);
//   console.log(id);
  const handleDelete = id =>{
    fetch(`http://localhost:5000/movies/${id}`,{
        method: 'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{console.log(data)
        if(data.deletedCount>0){
            navigate('/allMovies')
        }
    })
  }
  return (
    <div className="min-h-screen flex items-center justify-center my-12">
  <div className="w-11/12 sm:w-3/4 lg:w-1/2 bg-white p-8 rounded-2xl shadow-lg">
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

      <div className="w-5/6 mx-auto space-y-4">
        <p className="flex items-center text-lg text-gray-600">
          <BiCategory className="mr-2 text-yellow-500" />
          <span className="font-semibold">Genre:</span>
          <span className="ml-2">{genre}</span>
        </p>

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

        <div className="flex justify-between gap-4">
          <button onClick={()=>handleDelete(_id)} className="w-full py-2 text-white bg-red-500 rounded-lg shadow hover:bg-red-600 transition">
            Delete Movie
          </button>
          <button className="w-full py-2 text-white bg-blue-500 rounded-lg shadow hover:bg-blue-600 transition">
            Add to Favorite
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Details;
