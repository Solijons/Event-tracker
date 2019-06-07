import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Main from './components/Main/Main'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MainAddNewEventPage from './components/Event/MainAddNewEventPage'
import logo from './assets/Bayer-logo-64px.png'

class App extends React.Component {
  render() {
    return (<>
      <Navbar bg="pink" expand="lg">
        <Navbar.Brand>
          <img
        alt=""
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />Bayer Event Tracker</Navbar.Brand>
      </Navbar>

      <Container>
        <Row>
          <Col>
            <Router>
              <Route path="/" exact component={Main} />
              <Route path="/add-event" component={MainAddNewEventPage} />
            </Router>
          </Col>
        </Row>
      </Container>
    </>);
  }
}

export default App;
