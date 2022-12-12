import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./movies.css";
import image from "./utils/img_avatar2.png";
export default function MoviesList() {
  const [movies, setMovies] = useState("");

  console.log("movies", movies);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://localhost:8000/getMovies")
      .then((response) => response.json())

      .then((data) => setMovies(data));
  };

  return (
    <>
      {/* <div className="App">Movies List</div> */}
      {movies.map((data) => {
        return (
          <>
            <div class="card">
              <img src={image} alt="Avatar" style={{ width: "20em" }} />
              <div class="container">
                <h4>
                  <b>{data.movieName}</b>
                </h4>
                <p> Ratings : {data.rating}</p>
                <p>Relesed On : {data.relesedDate}</p>
              </div>
            </div>
            <br />
          </>
        );
      })}
    </>
  );
}

//export default MoviesList;
