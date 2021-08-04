import React, { Component } from 'react';
import { getEvents, extractLocations } from './api';
import './App.css';

import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';



class App extends Component {
  state = {
    events: [],
    locations: []
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events, locations: extractLocations(events)
        });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, eventCount) => {

    const { currentLocation, numberOfEvents } = this.state;
    if (location) {
      getEvents().then((response) => {
        console.log(response);
        const locationEvents =
          location === "all"
            ? response
            : response.filter((event) => event.location === location);
        const events = locationEvents.slice(0, numberOfEvents);
        return this.setState({
          events: events,
          currentLocation: location,
          locations: response.locations,
        });
      });
    } else {
      getEvents().then((response) => {
        const locationEvents =
          currentLocation === "all"
            ? response.events
            : response.events.filter(
              (event) => event.location === currentLocation
            );
        const events = locationEvents.slice(0, eventCount);
        return this.setState({
          events: events,
          numberOfEvents: eventCount,
          locations: response.locations,
        });
      });
    }
  }

  render() {
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
