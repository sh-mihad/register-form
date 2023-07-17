import { configureStore } from "@reduxjs/toolkit";
import formDataReducer from "../features/formData/formDataSlice";

export const store = configureStore({
    reducer:{
        formData : formDataReducer,
    }
})