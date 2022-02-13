import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'

function CharacterDetails(){
    const {id}=useParams()
    console.log("These are the character details", id)

    const URL ="https://bobsburgers-api.herokuapp.com/characters/" +id
    const [characterDetails, setCharacterDetails] = useState([])

    useEffect(() => {
  
        fetch(URL) 
        .then((res) => res.json())
        .then((json) => {
          console.log(json)
          setCharacterDetails(json)
        })
        .catch(error =>{
          console.log(error)
        })
      }, []);
    
    return(
        <div className="details-container">
           <img src={characterDetails.image}
           alt="faceOfCharacter"/> 
          <div className="details">
            <ul>
            <li>First Appearance:</li>
            <li>{characterDetails.firstEpisode}</li>
            <li>Voiced By:</li>
            <li>{characterDetails.voicedBy}</li> 
          
            </ul>
          </div>
          </div>
    )
}





export default CharacterDetails