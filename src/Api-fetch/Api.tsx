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
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMGY4NjcyNjlmNjQyMzRmMjE4YTM0YWU0NzI1MzFiMiIsInN1YiI6IjY1NjliNTNkZDA0ZDFhMDEyZWI5Y2M3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8wyUHGs8hOVWSOden0u72BGvAPjYjDhz4kX2z_6_VUs",
        },
      };

      const r = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${props.title}&include_adult=false&language=en-US&page=1`,
        options
      );
      const response = await r.json();

      const id = response.results[0].id;

      setSearch(response.results[0]);

      console.log("Search", response);

      const d = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
        options
      );
      const response4 = await d.json();

      setDuration(response4);

      console.log("Duration", response4);

      const v = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        options
      );
      const response2 = await v.json();

      setVideo(response2.results[0]);
      console.log("Video", response2);

      const c = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
        options
      );
      const response3 = await c.json();

      console.log("Cast", response3);

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
