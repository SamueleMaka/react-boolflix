import { useState, useEffect, use } from 'react'
import './App.css'
import axios from 'axios'
import SingleCard from './Components/SingleCard'

function App() {
  const [userQuery, setUserQuery] = useState("")
  const [movies, setMovies] = useState([])
  const [tvSeries, setTvSeries] = useState([])

    useEffect(() => {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${userQuery}`)
        .then(res => {
          setMovies(res.data.results)
        })
    }, [userQuery])

    useEffect(() => {
      axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${import.meta.env.VITE_API_KEY}&query=${userQuery}`)
        .then(res => {
          setTvSeries(res.data.results)
        })
    }, [userQuery])

    return (
      <>
      <div className="navBar">
        <div className="navTitle">BOOFLIX</div>
        <input type="text" value={userQuery} onChange={ (e)=>setUserQuery(e.target.value) }/>
      </div>
      <div className="container">
<div className="filmsContainer">
          <ul> 
            {movies.map((movie) => {
              return (
                <SingleCard
                  key={movie.id}
                  title={movie.title}
                  original_title={movie.original_title}
                  original_language={movie.original_language}
                  vote_average={movie.vote_average}
                  poster_path={movie.poster_path}
                  overwiev={movie.overview}
                />
              )
            })}
          </ul>
      </div>


      <div className="tvSeriesContainer">
          <ul>
            {tvSeries.map((tv) => {
              return (
                <SingleCard
                  key={tv.id}
                  title={tv.name}
                  original_title={tv.original_name}
                  original_language={tv.original_language}
                  vote_average={tv.vote_average}
                  poster_path={tv.poster_path}
                  overwiev={tv.overview}
                />
              )
            })}
        </ul>
      </div>
      </div>
      
      
      </>
      
  )
}

export default App


