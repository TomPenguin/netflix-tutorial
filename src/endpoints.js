const API_KEY = process.env.REACT_APP_TMDB_API_KEY

const endpoints = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-us`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/discover/tv?api_key=${API_KEY}&languager=en-us`,
  fetchDramaMovies: `/discover/tv?api_key=${API_KEY}&with_genres=18`,
  fetchComedyMovies: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/tv?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaryMovies: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
  fetchTrailerUrl: `/movie/:movieId/videos?api_key=${API_KEY}`,
}

export default endpoints
