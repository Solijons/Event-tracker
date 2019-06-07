import React from 'react';
import EventSidebarButtons from './EventSidebarButtons'
import Form from 'react-bootstrap/Form'

class EventSidebarTeams extends React.Component {
  state = {
    team1: [],
    team2: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/eventsTeams')
    .then(res => res.json())
    .then((data) => this.setState({ team1: data.team1, team2: data.team2 }))
  }

  render() {
  
    return (
      <div>
        <h1>{this.state.team1[0]}</h1>
        <Form.Check style={{ float: 'left' }} aria-label="option 1" label="Check"/>
        <br />
        <h1>{this.state.team2[1]}</h1>
        <Form.Check style={{ float: 'left' }} aria-label="option 1" />

      </div>    
    );
  }
}
export default EventSidebarTeams  


