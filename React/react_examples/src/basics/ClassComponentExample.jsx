import React from "react";

/* ----- Class Life Cycle Example ----- */
export class ClassComponentExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timer = setInterval(
      () => this.setState({
        date: new Date(),
      }),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return <div>{this.state.date.toLocaleTimeString()}</div>;
  }
}
