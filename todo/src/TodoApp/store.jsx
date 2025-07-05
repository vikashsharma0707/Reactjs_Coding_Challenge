import { configureStore } from "@reduxjs/toolkit";
import data from  "./createSlice"


const store = configureStore({
    reducer:{
      mytodo:data
    }
})

export default store;