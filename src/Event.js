import React, { Component } from "react";

class Event extends Component {
  render() {
    const {
      summary,
      location,
      start,
      htmlLink,
      description,
    } = this.props.event;

    return (
      <div>
        <h2>{summary}</h2>
      </div>
    );
  }
}
export default Event;
