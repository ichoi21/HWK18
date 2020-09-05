import React, { Component } from "react";
import API from "../utils/API";
import Results from "../components/Results";

class Saved extends Component {
  state = {
    savedBooks: [],
  };

  componentDidMount() {
    API.savedBooks()
      .then((savedBooks) => this.setState({ savedBooks: savedBooks }))
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div className="container mt-5">
        <h3>
          Your Collection{" "}
          <span style={{ color: "grey" }}>
            <i className="fas fa-book-reader"></i>
          </span>
        </h3>
        <Results books={this.state.savedBooks} />
      </div>
    );
  }
}

export default Saved;
