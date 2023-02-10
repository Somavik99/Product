// import { createStaticHandler } from "@remix-run/router";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Cards from "../Cards/Cards";


import "./Home.css";
const Home = ({ handleClick }) => {
  const [ProductsHome, setProductsHome] = useState([]);
  const navigate = useNavigate();
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
      <span className="prod">
        {ProductsHome.map((val, index) => {
          return (
            <div key={index} className="prod_contain">
              {/* <>{val.id}</> */}

              <Cards
                image={val.thumbnail}
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
