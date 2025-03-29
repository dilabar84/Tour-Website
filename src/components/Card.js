import { useState } from "react";

function Card({id,image,info,price,name,removeTour}){
    const[readmore,setmore]=useState(false);

    const description=readmore ? info : `${info.substring(0,200)}...`
    function readMoreHandler(){
        setmore(!readmore)
    }

    return(
        <div className="card">
         
         <img className="image" src={image}></img>


         <div className="tour-info" >
           < div className="tour-details">
              <div className="tour-price">₹{price}</div>
              <div className="tour-name">{name}</div>
           </div>

             <div className="description">
               {description}
                  <span className="read-more" onClick={readMoreHandler}>
                     {readmore ? `Show Less`:`Read More`}
                  </span>
             </div>
         </div>
    
         
         <button className="btn-red" onClick={()=>removeTour(id)}>
             Not Interested
         </button>

        </div>
    )
}
export default Card;