import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Icon } from "semantic-ui-react";
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
            <div key={index}>
              <img src={val.thumbnail} className="prod_img" alt="err" />
              <p className="prod_title">{val.title}</p>
              <Button animated>
                <Button.Content visible className="btn">
                  Show
                </Button.Content>
                <Button.Content hidden className="icon">
                  <Icon name="eye" />
                </Button.Content>
              </Button>
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
