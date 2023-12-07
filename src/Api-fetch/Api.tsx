import { useEffect, useState } from "react";
import { InfoboxProps, Streams } from "../components/Infobox/InfoboxType";
import Infobox from "../components/Infobox/Infobox";

const Api = (props: InfoboxProps) => {
  const [video, setVideo] = useState([{ key: "" }]);

  const [search, setSearch] = useState({ vote_average: -1 });

  const [cast, setCast] = useState([""]);

  const [duration, setDuration] = useState([{}]);

  useEffect(() => {
    const getData = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${
            import.meta.env.VITE_REACT_APP_TMDB_API_KEY
          }`,
        },
      };

      const search = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${props.title}&include_adult=false&language=en-US&page=1`,
        options
      );
      const response = await search.json();

      const id = response.results[0].id;

      setSearch(response.results[0]);

      const duration = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
        options
      );
      const response4 = await duration.json();

      setDuration(response4);

      

      const video = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        options
      );
      const response2 = await video.json();

      setVideo(response2.results[0]);
      const cast = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
        options
      );
      const response3 = await cast.json();

      setCast(response3.cast.map((a) => a.original_name));
    };

    getData();
  }, []);
  console.log();

  return (
    <Infobox
      title={search.title}
      date={search.release_date}
      rating={search.vote_average.toFixed(1)}
      description={search.overview}
      cast={cast}
      duration={duration.runtime + "m"}
      streams={{
        disney: false,
        netflix: true,
        hulu: true,
        siminn: true,
        amazon: true,
        hbo: true,
      }}
    ></Infobox>
  );
};
export default Api;
