// import { createStaticHandler } from "@remix-run/router";
import axios from "axios";
import React, { useEffect } from "react";
import { useContext } from "react";
import Cards from "../Cards/Cards";
import { Cartcontext } from "../Context/Context";
import NavBar from "../NavBar/NavBar";
import "./Home.css";

const Home = ({ ProductsHome, setProductsHome }) => {
  const productHandler = async () => {
    await axios
      .get("https://api.escuelajs.co/api/v1/products?limit=350&offset=0")
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
  },[]);

  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;
  console.log(Globalstate);
  return (
    <div>
      <NavBar />
      <span className="prod">
        {ProductsHome.map((data, index) => {
          data.quantity = 1;
          return (
            <div key={index} className="prod_contain">
              <Cards
                data={data}
                brand={data.brand}
                image={data.images}
                title={data.title}
                price={data.price}
                description={data.description}
                dispatch={dispatch}
                ProductsHome={ProductsHome}
              />
            </div>
          );
        })}
      </span>
    </div>
  );
};

export default Home;
