// https://github.com/Juriy/pro-react-redux

import React, { Component } from "react";
import "./app.css";
import Header from "../header";
import RandomPlanet from "../random-planet";
import PersonDetails from "../person-details";
import ItemList from "../item-list";

export default class App extends Component {

    state = {
        selectedPerson: null,
    }

    onPersonSelected = (id) => {
        this.setState( {
            selectedPerson: id,
        })
        
    }
  render() {
    return (
      <div className="container">
        <Header />
        <RandomPlanet />

        <div className={` row d-flex`}>
          <ItemList onItemSelected={ this.onPersonSelected } />
          <PersonDetails personId={ this.state.selectedPerson } />
        </div>
      </div>
    );
  }
}
