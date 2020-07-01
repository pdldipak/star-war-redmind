import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import PersonList from "./components/PersonList";
import Header from "./components/Header";

const URL = "http://swapi.dev/api/people/";

class App extends Component {
  state = {
    people: [],
  };

  filterName(userInput){
    let output = this.state.people.filter((person) =>{
    return person.name.toLowerCase().indexOf(userInput) > -1;
  
    });
    this.setState({people: output})
  }
  
  componentDidMount() {
    axios
      .get(URL)
      .then((response) => {
        // console.log(response)
        const arr = response.data.results;
        // console.log(arr);
        this.setState({ people: arr });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  render() {
        return (
      <main className="App">
        <div className="Header">
              <Header nameSearch={(people) => { this.filterName(people); }}/>
        </div>

        <div className="container">
          <center><h2>Star Wars characters</h2>
          </center>
          <PersonList people={this.state.people} />
            </div>
            <center className="mb-4">Creared by:Dipak Poudel </center>
      </main>
    );
  }
}
export default App;
