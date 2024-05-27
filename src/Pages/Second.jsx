import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeDatas } from '../Redux/Fakeapislice';

const Second = () => {

    const dispatch=useDispatch()

    const takeData=useSelector((state)=>state.Userdata.userDatas[0])

    console.log("finaly get it",takeData);

    function removeData(){
       dispatch(removeDatas()) 
    }

  return (
    <div>
     {takeData&&takeData.map((li)=>(
        <div key={li.id}>
        <h3>{li.name}</h3>
        </div>
     ))}
     <button onClick={removeData}>Remove</button>
    </div>
  )
}

export default Second
