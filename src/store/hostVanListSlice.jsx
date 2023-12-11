import { createSlice } from "@reduxjs/toolkit";

const HostVanList = JSON.parse(localStorage.getItem('HostVanList'));
const initialState = {
    hostVanList:HostVanList?HostVanList:[]
}

const hostVanSlice = createSlice({
    name:'hostVan',
    initialState,
    reducers:{
        getHostVanList:(state,action) =>{
            console.log("p");
            state.hostVanList =  action.payload
            localStorage.setItem('HostVanList', JSON.stringify(action.payload));
        }
    }
})

export const {getHostVanList} = hostVanSlice.actions

export default hostVanSlice.reducer