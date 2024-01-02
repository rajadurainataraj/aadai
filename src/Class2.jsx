import React from "react";
export class Class2 extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("child mount");
  }

  render() {
    console.log("render child");
    console.log(this.props);
    return <>{this.props.name}</>;
  }
}
