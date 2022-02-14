import { useState,useEffect } from 'react'
import{ Link } from 'react-router-dom'

function StoreList(props){
    const URL= "https://bobsburgers-api.herokuapp.com/storeNextDoor/"
    const [storeList, setStoreList] = useState([])
    console.log(storeList)
    
    useEffect(() => {
  
        fetch(URL) 
        .then((res) => res.json())
        .then((json) => {
          console.log(json)
          setStoreList(json)
        })
        .catch(error =>{
          console.log(error)
        })
      }, []);
  console.log(props)
  return(
    <div>
      <p>This is the Store List Page </p>
      <section className="container">

        {props.StoreList.map( (viewStores,index)=>{
          return(
            <Link to={`/storeNextDoor/${viewStores.id}`} key={index} >
              <div className="card">
                <div className="card-image">
                  <img src={viewStores.image}
                  alt="imageOfScene"/>
                  <ul>
                    <li>{viewStores.season}</li>
                  </ul>

                </div>
              </div>
            </Link>
          )
        })}
      </section>
    </div>
  )
}


export default StoreList