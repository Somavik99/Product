import React from "react";
import { Card, Icon } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import PageMod from "../Modal/Modal";
import "./Cards.css";

const Cards = ({ image, description, price, title, data, dispatch }) => {
  return (
    <div className="card">
      <Card className="card_contain">
        <img src={image} className="card_img" alt={title} />
        <Card.Content>
          <p className="card_para">{title}</p>
          <PageMod
            image={image}
            description={description}
            title={title}
            price={price}
          />
          <Button
            animated
            onClick={() => {
              dispatch({ type: "ADD", payload: data });
            }}
          >
            <Button.Content visible className="btn">
              Cart
            </Button.Content>
            <Button.Content hidden className="icon">
              <Icon name="shopping cart" />
            </Button.Content>
          </Button>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Cards;
