import React from "react";
import { Card, Icon } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import PageMod from "../Modal/Modal";
import "./Cards.css";

const Cards = ({ image, description, price, title, data, handleClick }) => {
  return (
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
        <Button animated onClick={() => handleClick(data)}>
          <Button.Content visible className="btn">
            Cart
          </Button.Content>
          <Button.Content hidden className="icon">
            <Icon name="shopping cart" />
          </Button.Content>
        </Button>
      </Card.Content>
    </Card>
  );
};

export default Cards;
