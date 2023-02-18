import React from "react";
import { useState } from "react";
import { Button } from "semantic-ui-react";
import "./Cart.css";

const Cart = ({ image, title, price }) => {
  const [Price, setPrice] = useState(0);
  return (
    <div>
      <>
      
           <div>
              <div>
                <img src={image} alt={title} />
              </div>
              <p>{title}</p>
              <div>
                <Button>+</Button>
                <Button>-</Button>
              </div>
              <span>{price}</span>
              <Button>Remove</Button>
            </div>

      </>
      <div>
        {price? setPrice():""}
        <span>Total Price</span>
        <span>Rs-{Price}</span>
      </div>
    </div>
  );
};

export default Cart;
