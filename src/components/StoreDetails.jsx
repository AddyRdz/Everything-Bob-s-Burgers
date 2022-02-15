import { useState, useEffect } from "react"
import{ useParams } from 'react-router-dom'
import './StoreDetails.css'

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
        <div className="storedetails-container">
            <div className="storedetails">
                <img src={storeDetails.image}
                alt="imageOfScene"/>
                <ul>
                    <li>Name:</li>
                    <li>{storeDetails.name}</li>
            
                </ul>
        </div>
        </div>
    )
}

export default StoreDetails