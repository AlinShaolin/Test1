import { useCallback, useEffect, useState } from "react";
import React from "react";

import classes from "./Customers.module.css";
import { TextCard } from "../../constants/string";

const Customer = ({ image, text }) => {
  const [movieData, setMovieData] = useState([]);

  const getMovieList = useCallback(async () => {
    const url = "https://jsonplaceholder.typicode.com/posts/";

    const response = await fetch(url)
      .then((response) => response.json())
      .catch((error) => error);
    setMovieData(response);
  }, []);

  useEffect(() => {
    getMovieList();
  }, [getMovieList]);
  movieData.splice(6, 99);
  return (
    <div className={classes.first_div}>
      {movieData.map((movie) => {
        return (
          <div className={classes.border}>
            <div className={classes.div_card}>
              <p className={classes.card_paragraph}>{movie.body}</p>
              <div className={classes.customer}>
                <img className={classes.card} src={image}></img>
                <div>
                  <h1 className={classes.name}>{movie.title.slice(0, 6)}</h1>
                  <p className={classes.post}>{TextCard.customer.post}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Customer;

{
  /* <div className={classes.border}>
  <div className={classes.div_card}>
    <p className={classes.card_paragraph}>{text}</p>
    <div className={classes.customer}>
      <img className={classes.card} src={image}></img>
      <div>
        <h1 className={classes.name}>{TextCard.customer.name}</h1>
        <p className={classes.post}>{TextCard.customer.post}</p>
      </div>
    </div>
  </div>
</div> */
}
