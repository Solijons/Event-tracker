import React from 'react';
import './MainBar.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DashboardEventCharts from './DashboardFlagsCharts';
import DashboardEventsComments from './DashboardEventsComments';

const MainBar = () => (
  <>


    <Row className="padding">

      <Col>
        <DashboardEventCharts />
      </Col>
      <DashboardEventsComments />

    </Row>
  </>
);


export default MainBar;
