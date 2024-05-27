import {createSlice} from '@reduxjs/toolkit'


const DemoInfo=createSlice({
    name:"Demodata",
    initialState:{
        DemoDatas:null,
        
    },
    reducers:{
        storeDemoData:(state,action)=>{
console.log("action value in Demoslice redux",action);
 state.DemoDatas=action.payload

        },
        removeDemoDatas:(state,action)=>{
            state.userDatas=[]
        }
    }
})

export const {storeDemoData,removeDemoDatas}=DemoInfo.actions
export default DemoInfo.reducer