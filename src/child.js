import React from "react";
import "./css/bootstrap.min.css";
import "./Assets/css/style.min.css";

export class Child extends React.Component {
  render() {
    return (
      <div className="text-center m-5">
        <button
          className="btn btn-outline-success"
          onClick={this.props.onClick}
        >
          <p className="text-center">click here</p>
        </button>
      </div>
    );
  }
}
