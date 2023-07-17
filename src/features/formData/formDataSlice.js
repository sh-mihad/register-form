import { createSlice } from "@reduxjs/toolkit";

const initialState  ={
    initData:[]
}


export const formDataSlice = createSlice({
    name : "formData",
    initialState,
    reducers:{
        addData : (state,action)=>{
         state.initData.push(action.payload)
        },
        removeData : (state,action)=>{
           const existingNewData = state.initData.filter(data=>data.id !== action.payload)
           state.initData = existingNewData;
        },
        editData : (state,action)=>{   
            const targetIndex = state.findIndex((element) => element.id === action?.payload?.id);
            state.initData[targetIndex] = action.payload
            // const findData = state.initData.find(data=>data.id === action.payload.id);
           
            
                        
        }
    }
})

export const {addData,removeData,editData} = formDataSlice.actions
export default formDataSlice.reducer