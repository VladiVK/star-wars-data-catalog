import React, { Component } from "react";
import styles from "./person-details.module.scss";

export default class PersonDetails extends Component {
  render() {
    return (
        <div className={`${styles.personDetails}`}>
            <div className={`${styles.personImage}`}>
                <img className={`rounded`}
                     src="https://starwars-visualguide.com/assets/img/characters/2.jpg"
                     alt="person"/>
                
            </div>
            <div className={`card ${styles.personCard}`}>
                    <div className={`card-body`}>
                        <h5 className={`card-title`}>RD-D2</h5>
                        <ul className={`list-group list-group-flush`}>
                            <li className={`list-group-item`}>
                                <span className={`${styles.term}`}>Gender:</span>
                                <span>male</span>
                            </li>
                            <li className={`list-group-item`}>
                                <span className={`${styles.term}`}>Birth Year:</span>
                                <span>43</span>
                            </li>
                            <li className={`list-group-item`}>
                                <span className={`${styles.term}`}>Eye Color:</span>
                                <span>red</span>
                            </li>
                        </ul>
                    </div>
            </div>

        </div>

      /* <div className={`card mb-2 ${styles['person-details']}`}>
                     <img className={`${styles['card__img']}`}
                         src="https://starwars-visualguide.com/assets/img/characters/3.jpg"
                         alt="Person"/>
                    <div className={`card-body`}>
                        <h5 className={`card-title`}>RD-D2</h5>
                        <ul className={`list-group list-group-flush`}>
                            <li className={`list-group-item`}>
                                <span className={`${styles.term}`}>Gender:</span>
                                <span>male</span>
                            </li>
                            <li className={`list-group-item`}>
                                <span className={`${styles.term}`}>Birth Year:</span>
                                <span>43</span>
                            </li>
                            <li className={`list-group-item`}>
                                <span className={`${styles.term}`}>Eye Color:</span>
                                <span>red</span>
                            </li>
                        </ul>
                    </div>
                </div> */
    );
  }
}
