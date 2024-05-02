import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Footer from "../layout/footer/Footer";
import Header from "../layout/header/Header";
import AddProduct from "../components/Product/AddProduct";
import ViewProduct from "../components/Product/ViewProduct";
import SingleProduct from "../components/Product/SingleProduct";
import EditProduct from "../components/Product/EditProduct";

const Routing = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="" element={<ViewProduct /> }/>
        <Route path="singleproduct/:id" element={<SingleProduct /> }/>
        <Route path="editproduct/:id" element={<EditProduct /> }/>
        <Route path="add" element={<AddProduct />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Routing;
