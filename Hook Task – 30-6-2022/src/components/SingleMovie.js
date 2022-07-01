import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function SingleMovie(props) {
    const [movies, setMovies] = useState([]);
    const params = useParams();  //get ID from url


    useEffect(() => {

        console.log(params.id);

        fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=6bd2f87c212a016945bb7783c8671cc2`)
            .then((response) => response.json())
            .then(moviesList => {
                setMovies(moviesList);
            });
    }, []);

    return (
        <div>
            <div class="container mt-5 mb-5">
                <div class="row d-flex justify-content-center">
                    <div class="col-md-10 mt-5">
                        <div class="card">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="images p-3">
                                        <div class="text-center p-4">
                                            <img class="card-img-top" src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`} alt="Card image cap" style={{ width: 300 }} />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="product p-4">
                                        <div class="d-flex mt-5 justify-content-between align-items-center">
                                            <div class="d-flex align-items-center">
                                                <a href="/movielist"><i class="fa fa-long-arrow-left">
                                                </i><h5 class="ml-1 d-inline" >Back</h5>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="mt-4 mb-3">
                                            <h2 class="text-uppercase">{movies.title}</h2>
                                            <h5>{movies.release_date}</h5>
                                        </div>
                                        <p class="about">{movies.overview}</p>

                                        <div class="cart mt-4 align-items-center">
                                            <button class="btn btn-primary text-uppercase mr-2 px-4">Watch Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleMovie;