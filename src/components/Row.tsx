import { useEffect, useState } from "react"
import axios from "infra/axios"
import "./Row.scss"
import { IMAGE_BASE_URL } from "consts"
import endpoints from "endpoints"

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

type TrailerOptions = {
  height: string
  width: string
  playerVars: {
    autoplay?: 0 | 1
  }
}

const Row = ({ title, endpoint, isLargeRow }: Props) => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [trailerUrl, setTrailerUrl] = useState<string | null>("")

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(endpoint)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [endpoint])

  const opts: TrailerOptions = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }
  console.log(opts)

  const handleClick = async (movie: Movie) => {
    if (trailerUrl) {
      setTrailerUrl("")
    } else {
      const endpoint = endpoints.fetchTrailerUrl.replace(":movieId", movie.id)
      const response = await axios.get(endpoint)
      setTrailerUrl(response.data.results[0]?.key)
    }
  }

  return (
    <div className="Row">
      <h2>{title}</h2>
      <div className="Row-posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`Row-poster ${isLargeRow && "Row-poster-large"}`}
            src={`${IMAGE_BASE_URL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>
    </div>
  )
}

export default Row
