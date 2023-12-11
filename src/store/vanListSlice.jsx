import { createSlice } from "@reduxjs/toolkit";

const getVanList = JSON.parse(localStorage.getItem('getVanList'));
const initialState = {
    vanList:getVanList?getVanList:[]
}

const vanSlice = createSlice({
    name:'van',
    initialState,
    reducers:{
        getvanList:(state,action) =>{
            state.vanList =  action.payload
            localStorage.setItem('getVanList', JSON.stringify(action.payload));
        }
    }
})

export const {getvanList} = vanSlice.actions

export default vanSlice.reducer