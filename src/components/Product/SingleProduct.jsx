import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { base_url, mov_url } from "../../api/api_url";
import Card from "react-bootstrap/Card";
import "./SingleProduct.css";

const SingleProduct = () => {
  let api_url = base_url + mov_url;
  // console.log("Movie API", api_url);
  let [state, setState] = useState([]);

  let { id } = useParams();
  console.log("Sub ID: ", id);

  useEffect(() => {
    axios
      .get(`${api_url}/${id}`)
      .then((res) => {
        console.log("Axios Resolved: ", res.data);
        setState(res.data);
      })
      .catch((err) => {
        console.log("Axios Error: ", err);
      });
  }, [setState, api_url]);

  return (
    <div className="single_main">
      <Card.Body>
        <Card.Text>
          <b>Movie Name:</b> {state.movie_name} <br />
          <b>IMDB Rating:</b> {state.IMDB_rating} <br />
          <b>Year of Release:</b> {state.year} <br />
          <b>Genre:</b> {state.genre}
        </Card.Text>
      </Card.Body>
    </div>
  );
};

export default SingleProduct;
