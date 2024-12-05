import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleMovie from '../../Components/SingleMovie';

const AllMovies = () => {
    const movies = useLoaderData()
    
    return (
        <div className='w-10/12 mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 rounded-xl p-6 my-12'>
                {
                    movies.map(movie=><SingleMovie key={movie._id} movie={movie}></SingleMovie>)
                }
            </div>
        </div>
    );
};

export default AllMovies;