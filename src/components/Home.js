//import useState and useEffect from react
import React from 'react';

//import from react-router-dom
import {Link} from 'react-router-dom';

// //axios import 
// import axios from 'axios';

//component import
import Starship from './Starship'

function Home({swData, displayShip}) {

  //a function that will render a button for each of the starships with its name displayed 
  const createButton = () => {
    //console.log('the data', swData)
    //make sure swData is not undefined, allows axios call to catch up 
    if(swData != undefined){
      //once its not undefined, create buttons for each starship option
      return swData.map((ship) => (
        <div key={ship.name}>
          <button onClick= {e => displayShip(ship)}>
            <Link to={ship.name}>{ship.name}</Link>
          </button>
       </div>
      ))

    }

  }


  return (
    <div>
      <h1>STAR WARS STARSHIPS</h1>
      {/* invoking the createButton function that renders buttons for each starship in the swData state */}
      {createButton()}
    </div>
  );
}

export default Home;
