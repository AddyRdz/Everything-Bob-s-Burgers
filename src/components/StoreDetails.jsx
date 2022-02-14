import { useState, useEffect } from "react"
import{ useParams } from 'react-router-dom'

function StoreDetails(){
    const {id}=useParams()
    console.log("These are the store next door changes" ,id)

    const URL= "https://bobsburgers-api.herokuapp.com/storeNextDoor/"+id
    const [storeDetails, setStoreDetails] =useState([])

    useEffect(() => {
  
        fetch(URL) 
        .then((res) => res.json())
        .then((json) => {
          console.log(json)
          setStoreDetails(json)
        })
        .catch(error =>{
          console.log(error)
        })
      }, []);

    return(
        <div className="details-container">
            <img src={storeDetails.image}
            alt="imageOfScene"/>
            <div className="details">
                <ul>
                    <li>Name:</li>
                    <li>{storeDetails.name}</li>
                    <li>Season:</li>
                    <li>{storeDetails.season}</li>
                    
            
                </ul>
        </div>
        </div>
    )
}

export default StoreDetails