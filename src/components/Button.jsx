import React from "react";

export default class Button extends React.Component {
  render() {
    const paginationLoader = this.props.paginationLoader;
    return (
      <button onClick={paginationLoader} className="loadingBtn">
        Load more..
      </button>
    );
  }
}
