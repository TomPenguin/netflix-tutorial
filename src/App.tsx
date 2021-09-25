import "./App.css"
import endpoints from "./endpoints"
import Banner from "./Banner"
import Row from "./Row"

function App() {
  return (
    <div className="App">
      <Banner />
      <Row title="Top Rated" endpoint={endpoints.fetchTopRated} />
      <Row title="Horror Movies" endpoint={endpoints.fetchHorrorMovies} />
      <Row title="Comedy Movies" endpoint={endpoints.fetchComedyMovies} />
      <Row
        title="Documentary Movies"
        endpoint={endpoints.fetchDocumentaryMovies}
      />
    </div>
  )
}

export default App
