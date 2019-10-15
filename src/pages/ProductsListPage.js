import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProductsListPage.css";

const products = ["car", "camera", "crossbow"];

const ProductsListPage = () => {
  const list = products.map(product => (
    <li key={product}>
      <Link to={`/product/${product}`}>{product}</Link>
    </li>
  ));

  return (
    <div className="products">
      <h2>Prducts List: </h2>
      <div>
        <ul>{list}</ul>
      </div>
    </div>
  );
};

export default ProductsListPage;
