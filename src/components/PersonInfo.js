import React, { Component } from "react";
import "./PersonInfo.css";

class PersonInfo extends Component {
  state = {
    expanded: false,
  };

  // toggle function
  open = () => {
    this.setState({ expanded: true }); //!this.state.expanded
  };

  close = () => {
    this.setState({ expanded: false }); //!this.state.expanded
  };

  render() {
    const info = this.props.charInfo;

    if (!this.state.expanded) {
      return (
        <button className="btn btn-info" onClick={this.open}>
          Show Info
        </button>
      );
    }

    return (
      <div>
        <button className="btn btn-danger" onClick={this.close}>
          Hide Info
        </button>
        <ul className="person-info">
          <li>Gender: {info.gender}</li>
          <li>Birth date: {info.birth_year}</li>
          <li>Skin-color: {info.skin_color}</li>
          <li>Eye-color:  {info.eye_color}</li>
          <li> Height:{info.height}cm, Mass:{info.mass}kg </li>
        </ul>
      </div>
    );
  }
}

export default PersonInfo;
