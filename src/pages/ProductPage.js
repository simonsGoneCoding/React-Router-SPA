import React from "react";
import Product from "../components/Product";
import { Link } from "react-router-dom";

const ProductsPage = ({ match }) => {
  return (
    <>
      <div>Product Page</div>
      <Product id={match.params.id} />
      <Link to="/products">Go back</Link>
    </>
  );
};

export default ProductsPage;
