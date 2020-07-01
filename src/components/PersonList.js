import React, { Component } from "react";
import "./PersonList.css";
import PersonInfo from "./PersonInfo";


class PersonList extends Component {
  render(props) {
    const people = this.props.people;
    return (
      <>
        <div className="container m-4" >
          <div className="row">
            {people.map((person) => (
              <div className="col-md-4" key={person.url}>
                <div className="card text-center">
                  <div className="card-body">
                    <h3 className="card-title">{person.name}</h3>
                    <PersonInfo charInfo={person} />
                  </div>
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </>
    );
  }
}

export default PersonList;
