//import useState and useEffect from react
import React, {useState, useEffect} from 'react';

//import from react-router-dom
import {Link, Route} from 'react-router-dom';

// //axios import 
// import axios from 'axios';

//component import
import Starship from './Starship'

function Home({swData, displayShip}) {

  // const [swData, setSwData] = useState([]);

  // //useEffect is where the axios call to SW api goes, and the swData state is set to the data it recieves 
  // useEffect(()=> {
  //   axios.get('https://swapi.dev/api/starships/')
  //   .then((res) => {
  //     //to get the starship results you do res.data.results, which is an array of the starships 
  //     setSwData(res.data.results);
  //   })
  //   .catch((err)=> {
  //     console.log('AXIOS ERROR', err)
  //   })
  // }, [])

  // //this function is run everytime the button is clicked for a specific starship
  // const displayShip = (ship) => {
  //   console.log('ship object', ship)

  // }

  //a function that will render a button for each of the starships with its name displayed 
  const createButton = () => {
    console.log('the data', swData)
    
    return swData.map((ship) => (
        <div key={ship.name}>
          <button onClick= {e => displayShip(ship)}>
            <Link to={ship.name}>{ship.name}</Link>
          </button>
       </div>
      ))
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
