import { IconButton } from "@material-tailwind/react";
import React from "react";

const CartProduct = () => {
  return (
    <div>
      <figure>
        <img src="/src/assets/product1.png" alt="" />
      </figure>
      <div>
        <div>
          <h2>{title}</h2>
          <p>{`Color : ${color}`}</p>
        </div>
        <div>
          <h2>{price}</h2>
          <IconButton variant="text"></IconButton>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
