import React, { useEffect, useState } from 'react'
import {styled} from "styled-components"


const Main=styled.div`
        width: 100%;
        height: 500px;
        background-color: red;
`

const Header=styled.h1`
    color: green;
    font-size: 100px;
`

const Button=styled.button`
    background-color: blue;
`

const Effect = () => {

    const [state,setState]=useState(0)

    useEffect(()=>{
        var i=0

        const Intervel=setInterval(()=>{
            console.log(i++);
        },2000)

        return()=>{
            console.log("clearup function");
            clearInterval(Intervel)
        }

    },[state])
  return (
    <Main>
        <Header>{state}</Header>
      <Button onClick={()=>setState(state+1)}>Click</Button>
    </Main>
  )
}

export default Effect
