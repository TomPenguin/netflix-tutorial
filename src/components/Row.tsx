import { useEffect, useState } from "react";
import { request } from "../services/axios";
import "./Row.scss";

type Props = {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
}

type Movie  = {
  id: string;
  name: string;
  title: string;
  original_name: string;
  poster_path: string;
  backdrop_path: string;
};

const base_url = "https://image.tmdb.org/t/p/original";

export const Row = ({ title, fetchUrl, isLargeRow }: Props) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await request.get(fetchUrl);
      setMovies(response.data.results);
      return response;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="Row">
      <h2>{title}</h2>
      <div className="Row-posters">
        {/* ポスターコンテンツ */}
        {movies.map((m) => ((
          <img
            key={m.id}
            className={`Row-poster ${isLargeRow && "Row-poster-large"}`}
            src={`${base_url}${isLargeRow ? m.poster_path : m.backdrop_path}`}
          />
        )))}
      </div>
    </div>
  );
}