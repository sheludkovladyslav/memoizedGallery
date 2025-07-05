import React from "react";

export default class Searchbar extends React.Component {
  inputValue = (event) => {
    event.preventDefault();
    const input = event.target.elements.input;

    this.props.SearchValue(input);

    event.target.reset();
  };

  render() {
    return (
      <form class="form" onSubmit={this.inputValue}>
        <button type="submit" class="button">
          <span class="button-label">Search</span>
        </button>

        <input
          className="input"
          type="text"
          autoComplete="off"
          name="input"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    );
  }
}
