import { useEffect, useState } from "react"
import axios from "infra/axios.js"
import endpoints from "endpoints.js"
import { IMAGE_BASE_URL } from "consts"
import "./Banner.scss"

type MovieProps = {
  title?: string
  name?: string
  orignal_name?: string
  backdrop_path?: string
  overview?: string
}

const Banner = () => {
  const [movie, setMovie] = useState<MovieProps>({})

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(endpoints.fetchNetflixOriginals)

      const pos = Math.floor(Math.random() * response.data.results.length - 1)
      setMovie(response.data.results[pos])
    }

    fetchData()
  }, [])

  return (
    <header
      className="Banner"
      style={{
        backgroundImage: `url("${IMAGE_BASE_URL}${movie?.backdrop_path}")`,
      }}
    >
      <div className="Banner-contents">
        <h2 className="Banner-title">
          {movie?.title || movie?.name || movie?.orignal_name}
        </h2>
        <div className="Banner-buttons">
          <button className="Banner-button">Play</button>
          <button className="Banner-button">My List</button>
        </div>

        <div className="Banner-description">{movie?.overview}</div>
      </div>
    </header>
  )
}

export default Banner
