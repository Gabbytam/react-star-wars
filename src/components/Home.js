//import useState and useEffect from react
import React from 'react';

//import from react-router-dom
import {Link} from 'react-router-dom';

//css import
import '../Home.css'


function Home({swData, displayShip}) {

  //a function that will render a button for each of the starships with its name displayed 
  const createButton = () => {
    //console.log('the data', swData)
    //this statement checks if the array is populated or not, if its empty, display loading message. idk why its not returning undefined as it had before...
    if(swData.length < 1){
      return <div id='loading'><h1>Loading...</h1></div>
    }
    //make sure swData is not undefined, allows axios call to catch up. set up this way because before swData was first being returned as undefined, then the empty array, then it got populated but in the undefined stage the map function would have a breakdown. 
    if(swData !== undefined){
      //once its not undefined, create buttons for each starship option
      return swData.map((ship) => (
        <div key={ship.name} className='shipCard'>
          <button onClick= {e => displayShip(ship)} className='button'>
            <Link to={ship.name}>{ship.name}</Link>
          </button>
       </div>
      ))
    }
  }


  return (
    <div className='container'>
      <div id='heading'>
        <h1>STAR WARS STARSHIPS</h1>
      </div>
      <div id='allButtons'>
        {/* invoking the createButton function that renders buttons for each starship in the swData state */}
        {createButton()}
      </div>
      
    </div>
  );
}

export default Home;
