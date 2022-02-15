import { useState,useEffect } from 'react'
import{ Link } from 'react-router-dom'

function StoreList(props){
    const URL= "https://bobsburgers-api.herokuapp.com/storeNextDoor/"
    const [storeList, setStoreList] = useState([])
    
    useEffect(() => {
  
        fetch(URL) 
        .then((res) => res.json())
        .then((json) => {
          setStoreList(json)
        })
        .catch(error =>{
          console.log(error)
        })
      }, []);
  console.log(props)
  console.log(storeList)
  return(
    <div>
      <p>This is the Store List Page </p>
      <section className="storecontainer">

        {storeList.map( (viewStores,index)=>{
          return(
            <Link to={`/stores/${viewStores.id}`} key={index} >
              <div className="store-card">
                <div className="staorecard-image">
                  <img src={viewStores.image}
                  alt="imageOfStore"/>
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