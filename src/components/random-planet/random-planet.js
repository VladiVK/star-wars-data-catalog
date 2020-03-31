import React, { Component } from "react";
import styles from "./random-planet.module.scss";
import SwapiService from "../../services/swapi-service.js";
import Spinner from '../../components/spinner';

export default class RandomPlanet extends Component {
  constructor() {
    super();

    this.state = {
      planet: {},
      loading: true,
    };
    this.swapiService = new SwapiService();
    this.updatePlanet(); 
    
  }
  onPlanetLoaded = (planet) => {
      this.setState( {
        planet,
        loading: false,
      } );
  }
  updatePlanet() {
    const id = Math.floor(Math.random() * 25) + 2;
      this.swapiService
          .getPlanet(id)
          .then( this.onPlanetLoaded );
  }

  render() {
    const { planet, loading } = this.state;

    // jsx always ignore null
    const spinner = loading ? <Spinner /> : null;
    const content = !loading ? <PlanetView planet={planet} /> : null;
 
    return (
      <div className={`${styles["random-planet"]} row border mb-2 d-flex justify-content-center`}>
        {spinner}
        {content}
      </div>
    );
  }
}

const PlanetView = ({planet}) => {

  const {
     id, name, population, rotationPeriod, diameter,
  } = planet;

  return (
    // React.Fragment - elem-wrapper to group other elems
    // we do not need additional <div>
    <React.Fragment>
      <div className={`${styles["image-box"]}`}>
          <img
            src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
            alt="Random planet"
          />
        </div>
      <div className={`${styles.body}`}>
          <h4 className={`${styles["body__title"]} my-2`}>{name}</h4>
          <div className={`body__text`}>
            <ul className={`list-group list-group-flush`}>
              <li className={`list-group-item`}>
                <span className={`${styles.term}`}>Population:</span>
                <span className={`${styles.term}`}>{population}</span>
              </li>
              <li className={`list-group-item`}>
                <span className={`${styles.term}`}>Rotation period:</span>
                <span className={`${styles.term}`}>{rotationPeriod}</span>
              </li>
              <li className={`list-group-item`}>
                <span className={`${styles.term}`}>Diameter:</span>
                <span className={`${styles.term}`}>{diameter}</span>
              </li>
            </ul>
          </div>
        </div>
    </React.Fragment>
  )
}
