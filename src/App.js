import React, {useState, useEffect} from 'react'

//import Route component from react-router-dom
import {Route} from 'react-router-dom'

//component import
import Home from './components/Home'
import Starship from './components/Starship'

//axios import 
import axios from 'axios';

function App() {
    const [swData, setSwData] = useState([]);

    const [ship, setShip] = useState([]);

    //useEffect is where the axios call to SW api goes, and the swData state is set to the data it recieves 
    useEffect(()=> {
        axios.get('https://swapi.dev/api/starships/')
        .then((res) => {
        //to get the starship results you do res.data.results, which is an array of the starships 
            setSwData(res.data.results);
        })
        .catch((err)=> {
            console.log('AXIOS ERROR', err)
        })
    }, [])

      //this function is run everytime the button is clicked for a specific starship
    const displayShip = (ship) => {
        console.log('ship object', ship)
        setShip(ship);
    }


    return (
        <div>
            <Route exact path='/' component={Home}/>
            <Route path='/starship' component={Starship}></Route>

            <Route exact path='/' render={()=> (<Home swData={swData} displayShip={displayShip}/>)}></Route>

            {/* <Home swData={swData} displayShip={displayShip}/> */}
            <Starship ship={ship}/>
        </div>
    )
}

export default App
