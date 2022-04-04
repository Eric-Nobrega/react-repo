import React from "react";
import "./Networth.css";

class Networth extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <h1 id="text">Networth: ${this.props.nwFigure}</h1>
        </nav>
      </div>
    );
  }
}

export default Networth;
