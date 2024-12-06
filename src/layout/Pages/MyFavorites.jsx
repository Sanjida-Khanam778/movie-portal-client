import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Favorite from '../../Components/Favorite';

const MyFavorites = () => {
    const data = useLoaderData()
    const [favorites, setFavorites] = useState(data)
    // const {email}= useParams()
    // console.log(email)
   

    return (
        <div className='w-10/12 mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 rounded-xl p-6 my-12'>
            {
                favorites.map((favorite, idx)=><Favorite key={idx} favorites={favorites} setFavorites={setFavorites} favorite={favorite}></Favorite>)
            }
        </div>
        </div>
    );
};

export default MyFavorites;