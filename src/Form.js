import { Component } from "react";

export default class Form extends Component {
  static getDerivedStateFromError({ message }) {
    console.log("getDerivedStateFromError");
    return { error: message };
  }

  state = {
    term: "",
    error: "",
  };

  constructor() {
    super();
    console.log("constructor");
  }

  componentDidCatch(error, info) {
    console.log("componentDidCatch", error, info);
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log("shouldComponentUpdate", nextProps, nextState, nextContext);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate", prevProps, prevState);
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", prevProps, prevState, snapshot);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handle = (e) => {
    this.setState({ term: e.target.value });
  };

  render() {
    console.log("render");
    return (
      <form>
        <div>
          <input
            type="text"
            placeholder="Search..."
            value={this.state.term}
            onChange={this.handle}
          />
        </div>
        <button type="submit">submit</button>
        <List term={this.state.term} />
      </form>
    );
  }
}

function List({ term }) {
  return <div>{term}</div>;
}
