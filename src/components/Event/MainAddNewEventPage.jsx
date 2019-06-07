import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import AddNewNurseryFieldEvent from './AddNewNurseryFieldEvent';
import EventSidebarButtons from './EventSidebarButtons';
import EventSidebarTeams from './EventSidebarTeams';

import './Event.css';

class MainAddNewEventPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      types: [],
      label: 'Plating Preperation',
    };
  }

  handleAdd() {
    this.setState({ types: [...this.state.types, 'date'] });
  }

  handleChange(e, index) {
    const statesDeStructure = this.state;
    statesDeStructure.types[index] = e.target.value;
    console.log(e.target.value);
    this.setState({ types: statesDeStructure.types });
  }


  handleRemove(index) {
    this.state.types.splice(index, 1);
    console.log(this.state.types, 'SSSS');
    this.setState({ types: this.state.types });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col sm={8} className="border">

            <AddNewNurseryFieldEvent
              typeValue={this.state.types}
            />

          </Col>

          <Col sm={4} className="border">
            <EventSidebarTeams />

            <EventSidebarButtons
              label={this.state.label}
              addClick={(e) => this.handleAdd(e)}
              removeClcik={(e) => this.handleRemove(e)}
            />

          </Col>
        </Row>
      </Container>
    );
  }
}

export default MainAddNewEventPage;
