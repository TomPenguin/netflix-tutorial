import "./App.css"
import endpoints from "./endpoints"
import Nav from "components/Nav"
import Banner from "components/Banner"
import Row from "components/Row"

function App() {
  return (
    <div className="App">
      <Nav />
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
