import MovieItemProps from "./MovieItemType";
import { CardContainer, InnerCard, Recommended } from "./style";
import { useState, useEffect } from "react";


function MovieItem() {
    const [movies, setMovies] = useState([])
    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMGY4NjcyNjlmNjQyMzRmMjE4YTM0YWU0NzI1MzFiMiIsInN1YiI6IjY1NjliNTNkZDA0ZDFhMDEyZWI5Y2M3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8wyUHGs8hOVWSOden0u72BGvAPjYjDhz4kX2z_6_VUs'
            }
          };
          
          fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
            .then(response => response.json())
            .then(response => setMovies(response.results))
            .catch(err => console.error(err));
    },[]) 
    console.log (movies)    
    return (
        <div>
        
        <Recommended>recommended</Recommended>
        <CardContainer>
            {movies.map(
            (movie)=>{
                return <InnerCard src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></InnerCard>
                
            }
            )
            
            }
        </CardContainer>
        </div>
    )
}

export default MovieItem;