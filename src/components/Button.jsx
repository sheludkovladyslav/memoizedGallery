import React from "react";

export default class Test extends React.Component {
  render() {
    const paginationLoader = this.props.paginationLoader;
    return <button onClick={paginationLoader}></button>;
  }
}
