import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Icon } from "semantic-ui-react";
import PageMod from "../Modal/Modal";

import "./Home.css";
const Home = () => {
  const [ProductsHome, setProductsHome] = useState([]);
  const productHandler = async () => {
    await axios
      .get("https://dummyjson.com/products")
      .then((resp) => {
        setProductsHome(resp.data.products);
        console.log(resp.data.products);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    productHandler();
  }, []);



  return (
    <div>
      <h1 id="header">🛒Product's Home🛒</h1>
      <span className="prod">
        {ProductsHome.map((val, index) => {
          return (
            <div key={index} className="prod_contain">
              <img src={val.thumbnail} className="prod_img" alt="err" />
              {/* <>{val.id}</> */}
              <p className="prod_title">{val.title}</p>
              <PageMod image={val.thumbnail} description = {val.description} title={val.title} price={val.price}  />
              <Button animated>
                <Button.Content visible className="btn">
                  Cart
                </Button.Content>
                <Button.Content hidden className="icon">
                  <Icon name="shopping cart" />
                </Button.Content>
              </Button>
            </div>
          );
        })}
      </span>
    </div>
  );
};

export default Home;
