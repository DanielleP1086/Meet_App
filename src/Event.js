import React, { Component } from "react";

class Event extends Component {
  render() {
    const {
      summary,
      location,
      start
    } = this.props.event;

    return (
      <div className="event">
        <h2>{summary}</h2>
        <p className='event-location'>{location}</p>
        <p className='start-time'>{start.dateTime} {start.timeZone}</p>
        <button className="details-btn">Details</button>
      </div>
    );
  }
}
export default Event;
