import React, { Component } from "react";
import styles from "./person-details.module.scss";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

export default class PersonDetails extends Component {

    swapiService = new SwapiService();

    state = {
        person: null,
    }

    componentDidMount() {
        this.updadePerson();
    }
    componentDidUpdate(prevProps) {
        // necessarily to wrapp in if(){...} to check and compare 
        // otherwise will be the infinity circle of updating !!!
        if( this.props.personId !== prevProps.personId) {
            this.updadePerson();
        }
    }

    updadePerson() {
        // get new Id from props
        const {personId} = this.props; //this.props.personId;

        if( !personId) { // if personId is a null: do nothing!!! there is nothing for updating!
            return;
        }

        this.swapiService
            .getPerson( personId )
            .then( (person) => {
                this.setState( {
                    person,
                })
            });
    }

  render() {
   
      if( !this.state.person) {
          return <span>Select person from a list!</span>
      }
    
    
    
      const {id, name, gender, birthYear, eyeColor} = this.state.person;
     
    return (
        
        <div className={`${styles.personDetails} `}>
            <div className={`${styles.personImage}`}>
                <img className={`rounded`}
                     src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                     alt="person"/>
                
            </div>
            <div className={`card ${styles.personCard}`}>
                    <div className={`card-body`}>
                        <h5 className={`card-title`}>{`${name} **ID: ${id}`} </h5>
                        <ul className={`list-group list-group-flush`}>
                            <li className={`list-group-item`}>
                                <span className={`${styles.term}`}>Gender:</span>
                                <span>{gender}</span>
                            </li>
                            <li className={`list-group-item`}>
                                <span className={`${styles.term}`}>Birth Year:</span>
                                <span>{birthYear}</span>
                            </li>
                            <li className={`list-group-item`}>
                                <span className={`${styles.term}`}>Eye Color:</span>
                                <span>{eyeColor}</span>
                            </li>
                        </ul>
                    </div>
            </div>
        </div>
    );
  }
}

