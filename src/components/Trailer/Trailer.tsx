import VideoProps from "./TrailerType";
import { VideoContainer, InnerVideo } from "./style";
import { useState, useEffect } from "react";



const VideoItem = (props : VideoProps) => {
    const [trailer, setTrailer] = useState([{key:""}])
    
    useEffect( ()=>{
        const getTrailer = async () => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMGY4NjcyNjlmNjQyMzRmMjE4YTM0YWU0NzI1MzFiMiIsInN1YiI6IjY1NjliNTNkZDA0ZDFhMDEyZWI5Y2M3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8wyUHGs8hOVWSOden0u72BGvAPjYjDhz4kX2z_6_VUs'
            }
          };
        
        //this fetch should be on the search bar  

        const r = await  fetch(`https://api.themoviedb.org/3/search/movie?query=${props.title}&include_adult=false&language=en-US&page=1`, options)
            const response = await r.json()
        
        //we should get a specific movie id here 

        const v = await fetch(`https://api.themoviedb.org/3/movie/${response.results[0].id}/videos?language=en-US`, options)
            const response2 = await v.json()

            setTrailer (response2.results[0])
            console.log ("Response", response2)
        }
    
    getTrailer ()
    },[]) 
    console.log (trailer)    
    return (
        <VideoContainer>
            <InnerVideo> 
             <iframe width={window.innerWidth} height="350px" src={`https://www.youtube.com/embed/${trailer.key}?si=gkKhyy6ya7s7rymS`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </InnerVideo>
        </VideoContainer>
    )
}   

export default VideoItem
