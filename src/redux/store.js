import {configureStore} from "@reduxjs/toolkit"
import productslice from "./silces/productsilce"
export const store = configureStore({
    reducer:{
        app: productslice
    }
})