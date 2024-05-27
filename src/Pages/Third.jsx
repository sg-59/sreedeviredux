import axios from 'axios'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { storeDemoData } from '../Redux/Secondslice'

const Third = () => {

    const data=useSelector((state)=>state.Userdata.userDatas[0])

    const dispatch=useDispatch()


    function display(){
        axios.get("https://jsonplaceholder.typicode.com/posts").then((datas)=>{
console.log(datas.data);
dispatch(storeDemoData(datas.data))
        })
    }


  return (
    <div>
    {
        data && data.map((li)=>(
            <div key={li.id}>
            <h3>{li.name}</h3>
            </div>
        ))
    }

    <button onClick={display}>Insert data in Second slice page</button>
    </div>
  )
}

export default Third
