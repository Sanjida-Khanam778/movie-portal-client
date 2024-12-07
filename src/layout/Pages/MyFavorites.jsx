import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Favorite from "../../Components/Favorite";

const MyFavorites = () => {
  const data = useLoaderData();
  const [favorites, setFavorites] = useState(data);

  return (
    <div className="w-10/12 mx-auto">
      {!favorites || favorites.length === 0 ? (
        <div className="min-h-[60vh] flex justify-center items-center">
          <p className="text-5xl font-bold"> No Movies to show</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 rounded-xl p-6 my-12">
          {favorites.map((favorite, idx) => (
            <Favorite
              key={idx}
              favorites={favorites}
              setFavorites={setFavorites}
              favorite={favorite}
            ></Favorite>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyFavorites;
