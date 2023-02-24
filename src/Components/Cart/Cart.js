// import { Global } from '@emotion/react'
import React from "react";
import { useContext } from "react";
import { Button, Card, Header, Icon, Image } from "semantic-ui-react";
import { Cartcontext } from "../Context/Context";
import "./Cart.css";
const Cart = () => {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;

  return (
    <>
      <Header size="huge">CART</Header>
      <div className="Cart">
        {state.map((data, index) => {
          return (
            <Card key={index}>
              <Card.Content className="Cart_Content">
                <Image
                  floated="right"
                  size="medium"
                  src={data.images}
                  className="cart_img"
                />
                <Card.Header className="Cart_header">{data.title}</Card.Header>
                <Card.Meta className="Cart_meta">Friends of Elliot</Card.Meta>
                <Card.Description className="Cart_desc">
                  {data.description}
                </Card.Description>

                <Card.Meta
                  style={{ color: "green", background: "rgb(255, 253, 253)" }}
                >
                  ${data.quantity * data.price}
                </Card.Meta>
              </Card.Content>
              <Card.Content extra >
                <div className="ui two buttons" id="btn_cart">
                  
                  <Button
                    basic
                    color="green"
                    onClick={() =>
                      dispatch({ type: "INCREASE", payload: data })
                    }
                    className="cart_plus"
                  >
                    +
                  </Button>
                  <p style={{ color: "black",background:"white" }} className="cart_P">{data.quantity}</p>
                  <Button
                    basic
                    color="red"
                    onClick={() => {
                      data.quantity > 1
                        ? dispatch({ type: "DECREASE", payload: data })
                        : dispatch({ type: "REMOVE", payload: data });
                    }}
                    className="cart_minus"
                  >
                    -
                  </Button>
                </div>
                <div className="btn_remv">
                  <Button
                    basic
                    color="red"
                    onClick={() => dispatch({ type: "REMOVE", payload: data })}
                  >
                    <Icon name="trash" color="violet" />
                  </Button>
                </div>
              </Card.Content>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
