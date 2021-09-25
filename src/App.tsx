import "./App.css"
import endpoints from "./endpoints.js"
import Row from "./Row"

function App() {
  return (
    <div className="App">
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
