import React, { Component } from "react";

export class EventsClass extends Component {
  clickhandler() {
    console.log("Class Clicked");
  }

  render() {
    return (
      <div>
        <button onClick={this.clickhandler}>click me - class component</button>
      </div>
    );
  }
}

export default EventsClass;
