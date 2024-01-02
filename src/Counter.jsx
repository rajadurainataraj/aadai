import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    console.log("Constructor");
  }

  increaseCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decreaseCounter = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  componentDidMount(){
    console.log("didmount");
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log("didupdate",prevProps,prevState,snapshot);
  }

  componentWillUnmount(){
    console.log("ummount");
  }
  render() {
    console.log("render");
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.decreaseCounter}>-</button>
        <button onClick={this.increaseCounter}>+</button>
      </div>
    );
  }
}
export default Counter;
