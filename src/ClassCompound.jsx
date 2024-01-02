import React from "react";
import { Class2 } from "./Class2";

export class ClassCompound extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: 0,
    };
  }

  componentDidMount() {
    console.log("Hi");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.name !== this.state.name) {
      document.title = `${this.state.name} - ${this.state.age}`;
      if (this.timeout != null) clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        console.log(this.state.name);
      }, 1000);
    }
    if (prevState.age !== this.state.age) {
      console.log("Age Changed");
      document.title = `${this.state.name} - ${this.state.age}`;
    }
  }

  componentWillUnmount() {
    if (this.timeout != null) clearTimeout(this.timeout);
    console.log("Bye");
  }
  render() {
    console.log("Render");
    return (
      <>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) =>
            this.setState({
              name: e.target.value,
            })
          }
        />
        {this.state.name}
        <button
          onClick={() =>
            this.setState((prevAge) => {
              return {
                age: prevAge.age + 1,
              };
            })
          }
        >
          +
        </button>
        <Class2 name={this.state.name} />
      </>
    );
  }
}
