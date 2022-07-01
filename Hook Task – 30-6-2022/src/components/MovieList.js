import { useEffect, useState } from "react";


const MovieList = (props) => {
    return ( 
        <>
            <h1 style={{textAlign:'center', marginTop:50, color:'blue'}}>Popular Movies</h1>
            {
                props.movies.map((mov) => (
                    <div class="col-sm-4" style={{ display: 'inline-block'}}>
                        <div class="card" style={{height:550,width:400, margin:20, marginTop:50}} >
                            <img class="card-img-top" src={`https://image.tmdb.org/t/p/w500${mov.poster_path}`} alt="Card image" style={{height:350 }} />
                            <div class="card-body">
                                <h5 class="card-title">{mov.title}</h5>
                                <p class="card-text">{mov.overview.substring(0, 80)}...</p>
                                <a href={'/movie/'+ mov.id} class="btn btn-primary">See More</a>
                            </div>
                        </div>
                    </div>
                ))
            }

        </>
     );
}
 
export default MovieList;