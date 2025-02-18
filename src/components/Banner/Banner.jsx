// import React from 'react'
import { useEffect, useState } from "react";
import axios from "../../util/axios";
import requests from "../../util/requests";

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async () => {
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
    };
  }, []);

  return <div>Banner</div>;
};

export default Banner;
