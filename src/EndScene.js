import { useState, useEffect } from "react"
import EndSceneList from "./components/EndSceneList"
import EndSceneDetails from "./components/EndSceneDetails"

function EndScene(){
    console.log("tHIS IS THE END SCENE FILE")
    const URL= "https://bobsburgers-api.herokuapp.com/endCreditsSequence/"
    const [endScene, setEndScene] = useState([])
    
    useEffect(() => {
  
        fetch(URL) 
        .then((res) => res.json())
        .then((json) => {
          console.log(json)
          setEndScene(json)
        })
        .catch(error =>{
          console.log(error)
        })
      }, []);
    
    
    return(
        
        <div>
            <h1>This is the endScene</h1>

        </div>
    )
}

export default EndScene