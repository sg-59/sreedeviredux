import {createSlice} from '@reduxjs/toolkit'


const userInfo=createSlice({
    name:"Userdata",
    initialState:{
        userDatas:[],
        productData:null
    },
    reducers:{
        storeData:(state,action)=>{
console.log("action value in redux",action);
    state.userDatas.push(action.payload)

        },
        removeDatas:(state,action)=>{
            state.userDatas=[]
        }
    }
})

export const {storeData,removeDatas}=userInfo.actions
export default userInfo.reducer


