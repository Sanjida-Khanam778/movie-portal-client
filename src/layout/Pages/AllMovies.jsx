import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllMovies = () => {
    const movies = useLoaderData()
    console.log(movies)
    return (
        <div>
            all movies
        </div>
    );
};

export default AllMovies;