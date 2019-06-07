import React, { useState, Fragment, useEffect } from 'react';
import { Timeline, Event } from 'react-timeline-scribble';
import './MainBar.css';
import Col from 'react-bootstrap/Col';
import { API_URL } from '../../config';

const DashboardEventsComments = () => {
  const [titles, setTitle] = useState([]);
  const [eventDate, setEventDate] = useState([]);
  const [field, setField] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/fakedata`)
      .then((results) => results.json())
      .then((data) => {
        const titleValue = [];
        const commentsValue = [];
        const fieldValue = [];
        const eventDateHappendValue = [];

        data.forEach((event) => {
          titleValue.push(event.event_title);
          eventDateHappendValue.push(event.event_happened);
          fieldValue.push(event.applo_field);
          commentsValue.push(event.comments);
        });
        setTitle(titleValue);
        setEventDate(eventDateHappendValue);
        setField(fieldValue);
        setComments(commentsValue);
      });
  }, []);


  return (
    <Col className="custom exp">
      <Fragment>
        <h1>
          Event Timeline
        </h1>
        <Timeline>
          <Event interval="05/24/2019" title="19PI11S3-MT13S3" subtitle={<i className="fas fa-plus-circle red fa-2x" />}>
            {comments[0]}
          </Event>
        </Timeline>
      </Fragment>
      <Fragment>
        <h1>Event Timeline </h1>
        <Timeline>
          <Event interval="05/24/2019" title="19PI11S3-MT13S3" subtitle={<i className="fas fa-info-circle yellow fa-2x" />}>
            {comments[1]}
          </Event>
        </Timeline>
      </Fragment>

      <Fragment>
        <h1>Event Timeline </h1>
        <Timeline>
          <Event interval="05/24/2019" title="19PI11S3-MT13S3" subtitle={<i className="fas fa-check-circle fa-2x green" />}>
            {comments[2]}
          </Event>
        </Timeline>
      </Fragment>
    </Col>
  );
};

export default DashboardEventsComments;
