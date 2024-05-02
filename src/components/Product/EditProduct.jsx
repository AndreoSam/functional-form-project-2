import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { base_url, mov_url } from "../../api/api_url";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./EditProduct.css";

const EditProduct = () => {
  let navigate = useNavigate();

  let api_url = base_url + mov_url;
  let [data, setData] = useState({
    movie_name: "",
    IMDB_rating: "",
    year: "",
    genre: "",
  });

  let { id } = useParams();
  console.log("Sub ID: ", id);

  useEffect(() => {
    axios
      .get(`${api_url}/${id}`)
      .then((res) => {
        console.log("Axios Resolved: ", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log("Axios Error: ", err);
      });
  }, [setData, api_url]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Edited Values: ", data);
    axios
      .put(`${api_url}/${id}`, data)
      .then((res) => {
        console.log("Updated Response: ", res.data);
        alert("Data Updated Sucessfully...!");
        navigate("/");
      })
      .catch((err) => {
        console.log("Update Error: ", err);
        alert("Error to Update");
      });
  };

  return (
    <div className="form_element">
      <form onSubmit={handleSubmit}>
        <h1>MOVIES</h1>
        <br />
        <label className="bold_larger">Enter the Name of the Movie: </label>
        <br />
        <input
          type="text"
          value={data.movie_name}
          name="name"
          onChange={(event) =>
            setData((prev) => ({ ...prev, movie_name: event.target.value }))
          }
        />
        <br />
        <label className="bold_larger">Enter the IMDB Rating: </label>
        <br />
        <input
          type="text"
          value={data.IMDB_rating}
          name="rate"
          onChange={(event) =>
            setData((prev) => ({ ...prev, IMDB_rating: event.target.value }))
          }
        />
        <br />
        <label className="bold_larger">Enter the Year of Release: </label>
        <br />
        <input
          type="text"
          value={data.year}
          name="year"
          onChange={(event) =>
            setData((prev) => ({ ...prev, year: event.target.value }))
          }
        />
        <br />
        <label className="bold_larger">Enter the Genre: </label>
        <br />
        <input
          type="text"
          value={data.genre}
          name="genre"
          onChange={(event) =>
            setData((prev) => ({ ...prev, genre: event.target.value }))
          }
        />
        <br />
        <input className="submit" type="submit" value="Add Movie" />
      </form>
    </div>
  );
};

export default EditProduct;
