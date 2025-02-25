// import React from 'react'
import Row from "../Row/Row";
import requests from "../../util/requests";

const RowList = () => {
  return (
    <div>
      <Row
        title="Netflix Movies"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        isLargeRow={false}
      />
      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRatedMovies}
        isLargeRow={false}
      />
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        isLargeRow={true}
      />
      <Row title="Tv shows" fetchUrl={requests.fetchTvShow} isLargeRow={true} />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow={true}/>
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow={true}/>
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow={true}/>
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow={true}/> 
      <Row
        title="Animation"
        fetchUrl={requests.fetchAnimation}
        isLargeRow={true}/>
    </div>
  );
};

export default RowList;
