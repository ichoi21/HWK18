import React, { Component } from "react";
import API from "../../utils/API";
import "./styles.css";

class Results extends Component {
  state = {
    savedBooks: [],
  };

  componentDidMount() {
    API.savedBooks()
      .then((savedBooks) => this.setState({ savedBooks: savedBooks }))
      .catch((err) => console.error(err));
  }

  handleSave = (book) => {
    if (this.state.savedBooks.map((book) => book._id).includes(book._id)) {
      API.deleteBook(book._id)
        .then((deletedBook) =>
          this.setState({
            savedBooks: this.state.savedBooks.filter(
              (book) => book._id !== deletedBook._id
            ),
          })
        )
        .catch((err) => console.error(err));
    } else {
      API.saveBook(book)
        .then((savedBook) =>
          this.setState({
            savedBooks: this.state.savedBooks.concat([savedBook]),
          })
        )
        .catch((err) => console.error(err));
    }
  };

  render() {
    return (
      <div>
        {!this.props.books.length ? (
          <h3 className="text-center mt-4">No Results to Display</h3>
        ) : (
          <div>
            {this.props.books.map((result) => (
              <div className="card mb-3" key={result._id}>
                <div className="row">
                  <div className="col-md-2">
                    <img
                      alt={result.title}
                      className="img-fluid"
                      src={result.image}
                    />
                  </div>
                  <div className="col-md-10">
                    <div className="card-body">
                      <h5 className="card-title font-bold">{result.title}</h5>
                      <h6 className="card-title text-muted font-italic">
                        By{" "}
                        {result.authors ? result.authors.join(", ") : "Unknown"}
                      </h6>
                      <p className="card-text">{result.description}</p>
                      <div>
                        <a
                          href={result.link}
                          className="btn btn-outline-dark mt-3"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View
                        </a>
                        <button
                          onClick={() => this.handleSave(result)}
                          className="btn btn-outline-success mt-3 ml-3"
                        >
                          {this.state.savedBooks
                            .map((book) => book._id)
                            .includes(result._id)
                            ? "Remove"
                            : "Add"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Results;
