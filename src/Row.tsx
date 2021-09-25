import { useEffect, useState } from "react"
import axios from "/Users/mochi.aota/Documents/practice/netflix-tutorial/src/infra/axios.js"

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

  console.log({ movies, title, isLargeRow })

  return <div className="Row" />
}

export default Row
