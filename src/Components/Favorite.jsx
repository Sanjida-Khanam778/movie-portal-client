import React from 'react';
import { Rating } from "react-simple-star-rating";
import { FaStar, FaClock, FaCalendarAlt } from "react-icons/fa";
import { BiCategory, BiDetail } from "react-icons/bi";

const Favorite = ({favorite, favorites, setFavorites}) => {
    const { _id, poster, title, duration, genre, year, rating } = favorite;
    const handleDelete = (id)=>{
        fetch(`https://movie-portal-server-ten.vercel.app/favorites/${id}`,{
          method: "DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
          const remaining = favorites.filter(item=>item._id!==id)
          setFavorites(remaining)
          
        })
      }
    return (
        <div className="p-6 bg-gray-100 border border-gray-300 rounded-2xl shadow-md hover:shadow-lg transition duration-300 ease-in-out">
        <div>
          <img className="rounded-2xl w-full object-cover" src={poster} alt="Movie Poster" />
        </div>
  
        <div className="space-y-4 mt-4">
          <h2 className="text-xl font-semibold text-gray-800">
            <span className="flex items-center">
              Title: <span className="ml-2 text-gray-700">{title}</span>
            </span>
          </h2>
  
          <p className=" flex items-center text-lg text-gray-600">
          <BiCategory className="mr-2 text-yellow-500" />
  
            <span className="font-semibold">Genre:</span>
                      <span className="ml-1"> {genre}</span>
  
          </p>
  
          <p className="flex items-center text-lg text-gray-600">
            <FaClock className="mr-2 text-indigo-500" />
            <span className="font-semibold text-gray-600">Duration:</span>
             <span className="ml-1">{duration} minutes</span>
          </p>
  
          <p className="flex items-center text-lg text-gray-600">
            <FaCalendarAlt className="mr-2 text-green-500" />
            <span className="font-semibold text-gray-600"> Release Year:</span>
            <span className="ml-1">{year}</span>
          </p>
  
          <p className="flex items-center text-lg">
          <FaStar className="mr-2 text-yellow-500" />
  
            <span className="font-semibold text-gray-600">Rating:</span>
            <Rating
              size={20}
              readonly={true}
              initialValue={rating}
              allowFraction
              className="ml-2 mb-1 text-yellow-500"
            />
          </p>
        </div>
  
        
          <button onClick={()=>handleDelete(_id)} className="btn btn-primary mt-5 w-full bg-[#e02929] hover:bg-[#df1f1f] text-lg text-white rounded-lg py-2">
            Delete Favorite <BiDetail className="text-2xl ml-2"></BiDetail>
          </button>
        
      </div>
    );
};

export default Favorite;