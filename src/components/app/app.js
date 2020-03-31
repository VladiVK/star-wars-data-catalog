// https://github.com/Juriy/pro-react-redux

import React from 'react';
import './app.css';
import Header from '../header';
import RandomPlanet from '../random-planet';
import PersonDetails from '../person-details';
import ItemList from '../item-list';

const App = () => {
    return(
        <div className='container'>
            <Header />
            <RandomPlanet />
            
               <div className={` row d-flex`}>
                    <ItemList />
                    <PersonDetails />
               </div>

               
            
            
        </div>
    )
}
export default App;