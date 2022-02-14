import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import CharacterList from './components/CharacterList';
import CharacterDetails from './components/CharacterDetails';
import StoreList from './components/StoreList';
import StoreDetails from './components/StoreDetails';


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
      <Navigation/>
     
      
          <Routes>
            <Route path = "/" element={<CharacterList setCharacterList={setCharacterList} characterList={characterList}/>} />
            <Route path = "/characters/:id" element= {<CharacterDetails/> } />
            <Route path ="/stores/" element={<StoreList />} />
            <Route path ="/stores/:id" element = {<StoreDetails/>} />
          </Routes>
        
        
    </div>
  );
}

export default App;
