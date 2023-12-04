import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Infobox from './components/Infobox/Infobox'
import { InfoboxContainer } from './Appstyle/style'
import MovieItem from './components/MovieItem/MovieItem'
import { MovieGrid } from './components/MovieItem/style'
import { InnerVideo, VideoContainer } from './components/Trailer/style'
import VideoItem from './components/Trailer/Trailer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <VideoContainer>
        <VideoItem title="Blade"></VideoItem>
      </VideoContainer>
    <InfoboxContainer>
      <Infobox title="Blade" date="1998" rating={9.9} duration="2h20m" streams={{
    disney: true,
    netflix: false,
    hulu: true,
    siminn: true,
    amazon: true,
    hbo: true,
    }} 
    description="A half-vampire, half-mortal man becomes a protector of the mortal race, while slaying evil vampires." 
    cast="Wesley Snipes, Stephen Dorff, Kris Kristofferson"/>
    </InfoboxContainer>
    <MovieGrid>
    <MovieItem></MovieItem>
    </MovieGrid>
    </div>
  )
}

export default App
