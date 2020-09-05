import React from "react";

function Form(props) {
  return (
    <div className="container text-center mt-5">
      <form>
        <div className="form-group">
          <input
            onChange={props.handleInputChange}
            value={props.search}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search for a Title!"
            id="search"
          />
          <button
            onClick={props.handleFormSubmit}
            className="btn btn-outline-dark mt-3 mb-5"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
