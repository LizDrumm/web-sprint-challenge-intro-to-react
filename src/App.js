import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character'
import styled, {keyframes} from 'styled-components'



const StyledApp = styled.div`

`
const StyledCard = styled.div`
display: flex;
justify-content:center;
flex-wrap:wrap;

`


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characterData, setCharacterData] = useState ([])

useEffect (()=>{
  axios.get ('https://swapi.dev/api/people')
  .then (response =>{
    setCharacterData (response.data.results)//setting to state
  })
  .catch (err =>{
    console.log(err)
  })

},[])


  return (
    <StyledApp className="App">
      <h1 className="Header">Star Wars Character List</h1>
    <StyledCard>
      {characterData.map(char=>
      (<Character charData ={char}/>)
      )}
    </StyledCard>
    </StyledApp>
  );
}

export default App;
