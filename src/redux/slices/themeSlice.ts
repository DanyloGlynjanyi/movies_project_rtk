import {createSlice} from "@reduxjs/toolkit";

interface IState {
    theme:boolean
}
const initialState:IState ={
    theme: false
}

const themeSlice = createSlice({
    name:'themeSlice',
    initialState,
    reducers:{
        themeChange:(state, action) => {
            state.theme=action.payload
        }
    }
});

const {reducer:themeReducer, actions}=themeSlice;
const themeActions={...actions}

export {themeReducer,themeActions}
