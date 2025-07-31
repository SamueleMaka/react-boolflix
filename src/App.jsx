import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [userQuery, setUserQuery] = useState("")
  const [movies, setMovies] = useState([])

    useEffect(() => {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${userQuery}`)
        .then(res => {
          setMovies(res.data.results)
        })
    }, [userQuery])


    return (
      <>
      <input type="text" value={userQuery} onChange={ (e)=>setUserQuery(e.target.value) }/>
      <ul> 
          {movies.map((movie) => {
            return (
              <div>
                <li>{movie.title}</li>
                <li>{movie.original_title}</li>
                <li>{movie.original_language}</li>
                <li>{movie.vote_average}</li>
                <hr />
              </div>
             
            )
          })}
      </ul>
       
      </>
      
  )
}

export default App


