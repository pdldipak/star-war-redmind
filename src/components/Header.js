import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
    };
  }

  inputChange=(event)=>{
    event.preventDefault();
    //  console.log(event.target.value)
    this.setState({ userInput: event.target.value });
    this.props.nameSearch(event.target.value);
  }

  render() {
    // console.log(this.props)
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 sub-info">
            <div className="bg-text">
              <h3>
                Star Wars is an American epic space-opera media franchise
                created by George Lucas, which began with the eponymous 1977
                film and quickly became a worldwide pop-culture phenomenon.
              </h3>
              <h3 className="mt-5">
             Search Character: <input
              type="text"
              value={this.state.userInput}
              onChange={this.inputChange}
                />
                </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

/*
          <center className="search-bar">
            <input
              type="text"
              value={this.state.userInput}
              onChange={this.inputChange.bind(this)}
            />
          </center>
*/
