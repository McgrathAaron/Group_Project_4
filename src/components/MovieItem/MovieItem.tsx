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
              Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_TMDB_API_KEY}`

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
      <Recommended>Recommended</Recommended>
      <CardContainer>
        {movies.map((movie) => {
          return (
            <InnerCard
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            ></InnerCard>
          );
        })}
      </CardContainer>
    </div>
  );
}

export default MovieItem;
