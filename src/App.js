import './App.css';
import { useState, useEffect } from 'react';
import staticData from './data'
import Navigation from './components/Navigation';
import CharacterList from './components/CharacterList';
import CharacterDetails from './components/CharacterDetails';

function App() {
  const URL= "https://bobsburgers-api.herokuapp.com/characters/"
  const [characterList, setCharacterList] = useState([])
  

  useEffect(() => {
  
    fetch(URL) 
    .then((res) => res.json())
    .then((json) => {
      console.log(json)
      setCharacterList(json)
    })
    .catch(error =>{
      console.log(error)
    })
  }, []);

  return (
    <div className="App">
      
      
          <h1>Hello!</h1>

          <CharacterList characterList={characterList} />
         
        
        
    </div>
  );
}

export default App;
