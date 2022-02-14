import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import './CharacterDetails.css'

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
            <li>Name:</li>
            <li>{characterDetails.name}</li>
            <li>First Appearance:</li>
            <li>{characterDetails.firstEpisode}</li>
            <li>Voiced By:</li>
            <li>{characterDetails.voicedBy}</li>
            <li>Occupation:</li>
            <li>{characterDetails.occupation}</li> 
            <li>Gender:</li>
            <li>{characterDetails.gender}</li>
            <li>Hair Color:</li>
            <li>{characterDetails.hairColor}</li>
            </ul>
          </div>
          </div>
    )
}





export default CharacterDetails