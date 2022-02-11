
function CharacterList(props){
    console.log("This is the character list",props.characterList)
    return(
        <div>
        <p>This is the character list page!</p>

        {props.characterList.map( (bobCharacters, index) =>{
            return(
                <div className="card" key={index}>
                <div className="card-image">
                    <img src={bobCharacters.image}/>
                    <ul>
                    <li>Name:{bobCharacters.name}</li>
                    <li>First Appearance:{bobCharacters.firstEpisode}</li>
                    <li>Voiced By:{bobCharacters.voicedBy}</li>
                    </ul>
                </div>    
                </div>    
            )
        })}
        </div>
    )
}






export default CharacterList