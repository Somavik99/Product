import axios from "axios";
import React, { useEffect, useState } from "react";

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
      <h1>Product's Home</h1>
      <span>
        {ProductsHome.map((val, index) => {
          return (
            <div key={index}>
              <span>{val.title}</span>
              <img src={val.thumbnail} alt="err"></img>
            </div>
          );
        })}
      </span>
    </div>
  );
};

export default Home;
