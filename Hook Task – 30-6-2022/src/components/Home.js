import React, { useEffect, useState } from "react";
import MovieList from './MovieList';


function Home() {

    const [movies, setMovies] = useState([]);


    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=6bd2f87c212a016945bb7783c8671cc2&language=en-US&page=1')
            .then((response) => response.json())
            .then(moviesList => {
                setMovies(moviesList.results);
                console.log(moviesList.results);
            });
    }, []);

    return (
        <>
            <div className='row'>
                <MovieList movies={movies} />
            </div>

        </>
    )
}

export default Home;