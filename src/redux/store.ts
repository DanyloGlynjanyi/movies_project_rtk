import {configureStore} from "@reduxjs/toolkit";
import {movieReducers} from "./slices";
import {themeReducer} from "./slices/themeSlice";

const store=configureStore({
    reducer:{
        movie:movieReducers,
        theme:themeReducer
    }
})

export {
    store
}