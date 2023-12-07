import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Infobox from "./components/Infobox/Infobox";
import { InfoboxContainer } from "./Appstyle/style";
import MovieItem from "./components/MovieItem/MovieItem";
import { MovieGrid } from "./components/MovieItem/style";

import Navbar from "./components/navbar";
import { InnerVideo, VideoContainer } from "./components/Trailer/style";
import VideoItem from "./components/Trailer/Trailer";
import Api from "./Api-fetch/Api";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />

      <VideoContainer>
        <VideoItem title="Blade"></VideoItem>
      </VideoContainer>

      <InfoboxContainer>
        <Api title="Blade"></Api>
      </InfoboxContainer>

      <MovieGrid>
        <MovieItem></MovieItem>
      </MovieGrid>
    </div>
  );
}

export default App;
