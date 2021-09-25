import { useEffect, useState } from "react"
import axios from "/Users/mochi.aota/Documents/practice/netflix-tutorial/src/infra/axios.js"
import "./Row.scss"

type Props = {
  title: string
  endpoint: string
  isLargeRow?: boolean
}

type Movie = {
  id: string
  name: string
  title: string
  original_name: string
  poster_path: string
  backdrop_path: string
}

const BASE_URL = "https://image.tmdb.org/t/p/original"

const Row = ({ title, endpoint, isLargeRow }: Props) => {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(endpoint)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [endpoint])

  return (
    <div className="Row">
      <h2>{title}</h2>
      <div className="Row-posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`Row-poster ${isLargeRow && "Row-poster-large"}`}
            src={`${BASE_URL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  )
}

export default Row
