import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Second from './Second'
import { storeData } from '../Redux/Fakeapislice'
import { useDispatch,useSelector } from 'react-redux'
const First = () => {

  const secondapidata=useSelector((state)=>state.Demodata.DemoDatas)

  console.log("second slice page data ",secondapidata);

   const dispatch= useDispatch()

    const display=async()=>{
const Apidatas=await axios.get('https://jsonplaceholder.typicode.com/users')
console.log("first",Apidatas.data);
dispatch(storeData(Apidatas.data))

    }



  return (
    <div>
      <h1>First</h1>
      <button onClick={display}>Click-me</button>
      <Link to={'/second'}>connect to second</Link>
      <br></br>
      <Link to={'/third'}>connect to third</Link>
    </div>
  )
}

export default First
