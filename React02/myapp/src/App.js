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
  constructor(props) {
    super(props);
    this.state = {
      timer: new Date().toLocaleString(),
    };
    this.updateTimer();
  }

  updateTimer = () => {
    setInterval(() => {
      this.setState({
        timer: new Date().toLocaleString(),
      });
    }, 1000);
  };

  render() {
    const { timer } = this.state;
    return (
      <div>
        <h3>This is timer in VN</h3>
        <p>{timer}</p>
      </div>
    );
  }
}
