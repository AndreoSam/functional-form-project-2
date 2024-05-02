import React, { useState } from "react";
import axios from "axios";
import { base_url, mov_url } from "../../api/api_url";
import "./AddProduct.css";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {

  let navigate = useNavigate();

  let api_url = base_url + mov_url;
  
  let [data, setData] = useState({
    movie_name: "",
    IMDB_rating: "",
    year: "",
    genre: "",
    errors: {
      movie_name: "",
      IMDB_rating: "",
      year: "",
      genre: "",
    },
  });

let changeHandler=(event) => {
  let {name, value} = event.target;
  let err = data.errors;
  setData({...data, [name]: value, errors: err});
  console.log("Validation error", data.errors);
}

  let submitHandler = (event) => {
    event.preventDefault();
    console.log("Submitted Value: ", data);
    let mov = {
      movie_name: data.name,
      IMDB_rating: data.rate,
      year: data.year,
      genre: data.genre,
    };

    axios
      .post(api_url, mov)
      .then((res) => {
        console.log("Axios Recieved: ", res);
        alert("Movie Added...!");
        navigate("/")
      })
      .catch((err) => {
        console.log("Axios Rejected: ", err);
      });
  };

  return (
    <div>
      <form className="form_element" onSubmit={submitHandler}>
        <h1>MOVIES</h1>
        <br />
        <label className="bold_larger">Enter the Name of the Movie: </label>
        <input type="text" name="name" onChange={changeHandler} />
        <br />
        <label className="bold_larger">Enter the IMDB Rating: </label>
        <input type="text" name="rate" onChange={changeHandler} />
        <br />
        <label className="bold_larger">Enter the Year of Release: </label>
        <input type="text" name="year" onChange={changeHandler} />
        <br />
        <label className="bold_larger">Enter the Genre: </label>
        <select name="genre" onChange={changeHandler}>
          <option value="action">Action</option>
          <option value="adventure">Adventure</option>
          <option value="comedy">Comedy</option>
          <option value="drama">Drama</option>
          <option value="horror">Horror</option>
          <option value="mystery">Mystery</option>
          <option value="sci-fi">Sci-Fi</option>
        </select>
        <br />
        <input className="submit" type="submit" value="Add Movie" />
      </form>
    </div>
  );
};

export default AddProduct;
