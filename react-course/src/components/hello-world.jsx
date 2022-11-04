import { Component } from "react";

export class HelloWorld extends Component {
  constructor(props) {
    super(props);
    console.log("This is new!");
  }

  render() {
    const { name } = this.props;
    return <h1>Hello {name}!</h1>;
  }
}
