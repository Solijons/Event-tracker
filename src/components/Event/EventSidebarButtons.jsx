import React from 'react';
import { Button, Form } from 'react-bootstrap';

const EventSideBar = (props) => {
  return (
    <>
      <Button type="button" variant="danger" style={{ float: 'right' }} onClick={props.removeClcik}>
        X
      </Button>
      <Button variant="success" style={{ float: 'right', marginRight: '10px' }} onClick={props.addClick}>
        +
      </Button>
    </>
  );
};

export default EventSideBar;