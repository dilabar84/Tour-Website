import Card from './Card'
function Tour({tours,removeTour}){
    return(
        <div className='container'>
            <div>
            <h2 className='title'>Plan With Dilkhush</h2>
            </div>
            
             <div className='cards'>
                {
                   tours.map((tour) => {
                    return   <Card key={tour.id} {...tour}  removeTour={removeTour} ></Card>
                 })
                }
                
               
             </div>
            
        </div>
    );
}
export default Tour