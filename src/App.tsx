import './App.css';
import { Row } from './components/Row';
import { requests } from './request';

function App() {
  return (
    <div className="App">
      <Row title="NETFLIX ORIGUINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
    </div>
  );
}

export default App;
