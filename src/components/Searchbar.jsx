import React from "react";

export default class Searchbar extends React.Component {
  inputValue = (event) => {
    event.preventDefault();
    const input = event.target.elements.input.value;

    this.props.SearchValue(input);

    event.target.reset();
  };

  render() {
    return (
      <form className="searchbar" onSubmit={this.inputValue}>
        <input
          className="input"
          type="text"
          autoComplete="off"
          name="input"
          autoFocus
          placeholder="Search images and photos"
        />

        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>
      </form>
    );
  }
}
