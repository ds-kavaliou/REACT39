import { Component, createRef } from "react";

export default class Form extends Component {
  static getDerivedStateFromError({ message }) {
    console.log("getDerivedStateFromError");
    return { error: message };
  }

  inputRef = createRef();

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

  handleChange = (e) => {
    this.setState({ term: e.target.value });
  };

  handleFocus = () => {
    this.inputRef.current.focus();
  };

  render() {
    console.log("render");

    const disabled = this.state.term === "реакт";

    return (
      <form>
        <div>
          <input
            type="text"
            placeholder="Search..."
            ref={this.inputRef}
            value={this.state.term}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" disabled={disabled}>
          submit
        </button>
        <button type="button" onClick={this.handleFocus}>
          focus
        </button>
      </form>
    );
  }
}
