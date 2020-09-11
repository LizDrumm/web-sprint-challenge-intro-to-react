// Write your Character component here
import React, { useState, useEffect } from 'react'
import styled, {keyframes} from 'styled-components'


const StyledCharacter = styled.div`
    border: 2px solid ${pr => pr.theme.primaryColor};
    border-radius: 15px;
    margin-top: 20px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 20px;
    width: 30%;
  
h2{
    font-size: 32px;
    margin: 15px;
    color: ${pr => pr.theme.secondaryColor};
}

p{
    font-size: 16px;
    font-weight:bolder;
    color: ${pr => pr.theme.black};
    padding-top:${pr => pr.theme.topPadding};
    padding-bottom: 1%;
}

a{
    padding-bottom:4%;

    margin: 2px;
}

`




const Character=(props)=>{
    const {name, height, birth_year, gender, homeworld} = props.charData

    return (
        <StyledCharacter>
        <h2> 🚀{name}</h2>
        <p>Height: {height}</p>
        <p>Birth Year: {birth_year}</p>
        <p>Gender: {gender}</p>
        <a href = {homeworld}>See Homeworld</a>
        </StyledCharacter>
        )
    }
  

export default Character