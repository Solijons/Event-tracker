import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


class CreateNurseryFields extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    const { show } = this.state;

    return (
      <>
        <Button variant="primary" onClick={this.handleShow} style={{ marginBottom: '20px' }}>
            Create Nursery Field
        </Button>

        <Modal show={show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create Nursery Field</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>SRE(s)</Form.Label>
                <Form.Control type="number" min={0} placeholder="Enter Number" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Nursery</Form.Label>
                <Form.Control as="select">
                  <option>MK</option>
                  <option>PA</option>
                  <option>INC</option>
                  <option>MK</option>
                  <option>PA</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Location</Form.Label>
                <Form.Control as="select">
                  <option>Screenhouse</option>
                  <option>Field</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlDate1">
                <Form.Label>Forcasted Date</Form.Label>
                <Form.Control type="date" rows="3" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlDate2">
                <Form.Label>Planting Date</Form.Label>
                <Form.Control type="date" rows="3" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput2">
                <Form.Label>Week</Form.Label>
                <Form.Control type="number" min={0} max={53} placeholder="Enter week" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Year</Form.Label>
                <Form.Control as="select">
                  <option>2019</option>
                  <option>2020</option>
                  <option>2021</option>
                </Form.Control>
              </Form.Group>
            </Form>


          </Modal.Body>

          <Modal.Footer>
            <Button variant="primary" onClick={this.handleClose}>
                Cancel
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
                Save
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default CreateNurseryFields;
