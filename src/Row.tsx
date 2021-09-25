import { useEffect, useState } from "react"
import axios from "infra/axios.js"
import endpoints from "endpoints.js"

const endpoint = endpoints.fetchTrending

type Props = {
  title: string
  fetchUrl: string
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

export const Row = ({ title, fetchUrl }: Props) => {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(endpoint)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  })

  console.log(movies)

  return <div className="Row" />
}
