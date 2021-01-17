import React from "react";
import { useParams } from "react-router-dom";
import Shoe from "../shoes.json";

const ProductItems = () => {
  const { id } = useParams();
  const shoe = Shoe[id];
  if (!shoe) {
    return <h2>Product not found</h2>;
  }
  return (
    <div>
      <h2>Product Items</h2>
      <div className="link">
        <h2>{shoe["name"]}</h2>
        <img src={shoe["img"]} alt="shoesImage" height={500} />
      </div>
    </div>
  );
};

export default ProductItems;
