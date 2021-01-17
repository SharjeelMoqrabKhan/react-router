import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import Shoes from "../shoes.json";
const Product = () => {
  return (
    <div className="productContainer">
      <h2>Product</h2>
      {Object.keys(Shoes).map((keyName) => {
        const shoe = Shoes[keyName];
        return (
          <Link key={keyName} className="link" to={`/product/${keyName}`}>
            <h2>{shoe["name"]}</h2>
            <img src={shoe["img"]} alt="shoesImage" height={200} width={150} />
          </Link>
        );
      })}
    </div>
  );
};

export default Product;
