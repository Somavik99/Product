import axios from "axios";
import React, { useState } from "react";
import { Button, Image, Modal, Icon, List } from "semantic-ui-react";
const PageMod = ({id}) => {
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
        console.log(respo.data.products)
        setModState(respo.data.products);
      })
      .catch((err) => {
        console.log(err);
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
        <Modal.Content image>
          <Image size="medium" src={ModState.thumbnail[id]} wrapped />
          <Modal.Description>
            <p>{ModState.brand[id]}</p>
            <List>
              <List.Item>{ModState.title[id]}</List.Item>
              <List.Item>{ModState.price[id]}</List.Item>
            </List>
          </Modal.Description>
        </Modal.Content>
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
