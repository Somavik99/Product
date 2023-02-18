import axios from "axios";
import React, { useState } from "react";
import { Button, Image, Modal, Icon, List } from "semantic-ui-react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import "./Modal.css";
// import { Img } from "@chakra-ui/react";

const PageMod = (props) => {
  const { description, title, price, image } = props;
  const [open, setOpen] = React.useState(false);
  const [ModState, setModState] = useState({
    brand: "",
    thumbnail: "",
    title: "",
    price: "",
  });
  const prodData = async () => {
    await axios
      .get(`https://api.escuelajs.co/api/v1/products?limit=200&offset=0`)
      .then((respo) => {
        // console.log(respo.data.products);
        setModState(respo.data);
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
      </Modal.Content>
      <List>
        <List.Item className="List">Name: {title}</List.Item>
        <List.Item className="List1">Price: ${price}</List.Item>
      </List>
      <Modal.Description className="des">
        <p className="para">{description}</p>
      </Modal.Description>

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
