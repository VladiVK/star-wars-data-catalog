import React, { Component } from "react";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from '../error-indicator';

export default class PeoplePage extends Component {
  state = {
    selectedPerson: 1,
    hasError: false,
  };
  componentDidCatch() {
     this.setState({hasError: true})
  }
  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    });
  };
  render() {

    if (this.state.hasError) {
        return <ErrorIndicator />;
    }

    return (
      <div className={`row`}>

            <div className={`col-sm-6`}>
                <ItemList onItemSelected={this.onPersonSelected} />
            </div>

            <div className={`col-sm-6`}>
                <PersonDetails personId={this.state.selectedPerson} />
            </div>

      </div>
    );
  }
}
