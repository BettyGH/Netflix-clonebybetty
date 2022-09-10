
import './App.css';
import Row from "./Row.js"
import requests from './requests'
import Banner from './Banner';
import Nav from "./Nav";
function App() {
  return (
    <div className='App'>
      <Nav/>
      <Banner/>
      <Row title="NETFLEX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="TopRated" fetchUrl={requests.fetchTopRatedMovies}/>
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
