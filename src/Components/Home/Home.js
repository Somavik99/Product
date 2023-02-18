// import { createStaticHandler } from "@remix-run/router";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import NavBar from "../NavBar/NavBar";
import "./Home.css";

const Home = ({ ProductsHome, setProductsHome }) => {
  const [cart, setCart] = useState([]);

  const handleClick = (data) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (data.id === product.id) {
        isPresent = true;
      }
    });
    if (isPresent) {
      return;
    }
    setCart([...cart, data]);
    console.log(data);
  };

  const productHandler = async () => {
    await axios
      .get("https://api.escuelajs.co/api/v1/products?limit=200&offset=0")
      .then((resp) => {
        setProductsHome(resp.data);
        // console.log(resp.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    productHandler();
  }, []);

  return (
    <div>
      <NavBar size={cart.length} />
      <span className="prod">
        {ProductsHome.map((val, index) => {
          return (
            <div key={index} className="prod_contain">
              <Cards
                data={val}
                image={val.images}
                pics={val.images[index]}
                title={val.title}
                price={val.price}
                description={val.description}
                handleClick={handleClick}
              />
            </div>
          );
        })}
      </span>
    </div>
  );
};

export default Home;
