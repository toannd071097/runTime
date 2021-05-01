import React, { Component } from "react";

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Clock></Clock>
      </div>
    );
  }
}

class Clock extends Component {
  render() {
    return (
      <div>
        <h3>This is timer in VN</h3>
        <p>{ new Date().toLocaleString() }</p>
      </div>
    );
  }
}

