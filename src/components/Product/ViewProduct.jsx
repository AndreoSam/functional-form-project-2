import React, { useState, useEffect } from "react";
import axios from "axios";
import { base_url, mov_url } from "../../api/api_url";
import { Container } from "react-bootstrap";
import "./ViewProduct.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { GrSearch } from "react-icons/gr";

const ViewProduct = () => {
  let api_url = base_url + mov_url;
  let [state, setState] = useState([]);
  let [search, setSearch] = useState("");

  let fetch_item = () => {
    axios
      .get(api_url)
      .then((res) => {
        // console.log("Axios Resolved: ", res);
        setState(res.data);
      })
      .catch((err) => {
        console.log("Axios Error: ", err);
      });
  };

  const editItem = (prod_id) => {
    console.log("ID to be edited", prod_id);
  };

  const deleteItem = (prod_id) => {
    console.log("ID to be deleted", prod_id);
    axios
      .delete(`${api_url}/${prod_id}`)
      .then((res) => {
        console.log("Axios : ", res);
        fetch_item();
      })
      .catch((err) => {
        console.log("Axios Error: ", err);
      });
  };

  useEffect(() => {
    fetch_item();
  }, [setState, api_url]);

  return (
    <Container>
      <br />
      <h1 style={{ textAlign: "center" }}>Name of all the Movies Added</h1>
      <hr />

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>SL No:</th>
            <th>Movie Name:</th>
            <th>IMDB Rating:</th>
            <th></th>
            <th></th>
            <th>
              <input
                type="text"
                placeholder="Search..."
                onChange={(event) => {
                  setSearch(event.target.value);
                }}
              />
            </th>
          </tr>
        </thead>

        <tbody>
          {state
            .filter((val) => {
              if (search === "") {
                return val;
              } else if (
                val.movie_name.toLowerCase().includes(search.toLowerCase())
              ) {
                return val;
              }
            })
            .map((prod) => (
              <tr key={prod.id}>
                <td>{prod.id}</td>
                <td>{prod.movie_name}</td>
                <td>{prod.IMDB_rating}</td>

                <td>
                  <Link to={`/singleproduct/${prod.id}`}>
                    <Button className="more_details">More Details</Button>
                  </Link>
                </td>
                <td>
                  <Link to={`/editproduct/${prod.id}`}>
                    <Button
                      className="edit"
                      onClick={() => {
                        editItem(prod.id);
                      }}
                    >
                      Edit
                    </Button>
                  </Link>
                </td>
                <td>
                  <Button
                    className="delete"
                    onClick={() => {
                      deleteItem(prod.id);
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>

      <br />
    </Container>
  );
};

export default ViewProduct;
