import { Link } from 'react-router-dom'
import './characterList.css'

function CharacterList(props){
    // console.log("This is the character list",props.characterList)
    return(
        <div>
            <p>This is the character list page!</p>
            <section className="container">

                {props.characterList.map( (bobCharacters, index) =>{
                    return(
                        
                        <Link to={`/characters/${bobCharacters.id}`} key={index} >
                        <div className="card" >
                        <div >
                            <img className='card-image' src ={bobCharacters.image}
                            alt="faceOfCharacter"/>
                            <ul>
                            <li>{bobCharacters.name}</li>
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






export default CharacterList