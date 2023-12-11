
import { configureStore } from "@reduxjs/toolkit";
import vanListSlice from "./vanListSlice";
import hostVanListSlice from "./hostVanListSlice";

const store = configureStore({
    reducer:{
        van: vanListSlice,
        hostVan: hostVanListSlice,
    }
})

export default store