import { useEffect, useState } from "react";
import axios from "../util/axios";
// import requests from "../../util/requests";
import "./banner.css";
import requests from "../util/requests";

const Banner = () => {
  const [movie, setMovie] = useState({});
  /*
   {
      "adult": false,
      "backdrop_path": "/2meX1nMdScFOoV4370rqHWKmXhY.jpg",
      "genre_ids": [10759, 9648, 18],
      "id": 93405,
      "origin_country": [
        "KR"
      ],
      "original_language": "ko",
      "original_name": "오징어 게임",
      "overview": "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits — with deadly high stakes.",
      "popularity": 870.074,
      "poster_path": "/1QdXdRYfktUSONkl1oD5gc6Be0s.jpg"
      "first_air_date": "2021-09-17",
      "name": "Squid Game",
      "vote_average": 7.9,
      "vote_count": 15466
    },
  */
  // https://api.themoviedb.org/3/discover/tv?api_key=950e969ccbc798833af2c6292a2fc253&with_networks=123
  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__button">
          <button className="banner__button play">Play</button>
          <button className="banner__button info ">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner__fadeBottom" />
    </div>
  );
};

export default Banner;
