import axios from "axios";
import React, { useState } from "react";
import { Button, Image, Modal, Icon, List } from "semantic-ui-react";
import "./Modal.css"
const PageMod = (props) => {
  const { description, image, title, price } = props;
  const [open, setOpen] = React.useState(false);
  const [ModState, setModState] = useState({
    brand: "",
    thumbnail: "",
    title: "",
    price: "",
  });
  const prodData = async () => {
    await axios
      .get(`https://dummyjson.com/products`)
      .then((respo) => {
        // console.log(respo.data.products);
        setModState(respo.data.product);
      })
      .catch((err) => {
        console.log(err);
        ModState(err);
      });
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button animated onClick={(e) => prodData(e.target)}>
          <Button.Content visible className="btn">
            Show
          </Button.Content>
          <Button.Content hidden className="icon">
            <Icon name="eye" />
          </Button.Content>
        </Button>
      }
    >
      <Modal.Header>Product Details</Modal.Header>
      <Modal.Content image className="image">
        <Image size="large" src={image} wrapped />
        <Modal.Description className="des">
        </Modal.Description>
      </Modal.Content>
      <List >
        <List.Item className="List">Name: {title}</List.Item>
        <List.Item className="List1">Price: ${price}</List.Item>
      </List>
          <p className="para">{description}</p>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button onClick={() => setOpen(false)} positive>
          Ok
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default PageMod;
