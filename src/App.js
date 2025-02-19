import React,{useState} from "react";
import data from './data';
import Tour from './components/Tour';

const App = () => {
  const[tours,setTour]=useState(data)

  function  removeTour(id)
  {
    const newTour=tours.filter(tour=>tour.id !==id)

    setTour(newTour)
  }
  function refreshHandler(){
          setTour(data);
  }
  if(tours.length === 0){
    return(
      <div className="refresh"> 
        <h2>No Tours Left</h2>
        <button className="btn-refersh" onClick={refreshHandler}>
          Refresh
        </button>

      </div>
    );

  }

  return(
  <div>
    <Tour tours={tours} removeTour={removeTour} ></Tour>
</div>)
    
};

export default App;
