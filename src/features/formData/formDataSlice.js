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
       
            // const findData = state.initData.find(data=>data.id === action.payload.id);
            const updatedArry = state.initData.map(data=>{
                if(data.id === action.payload.id){
                    return {
                        ...data,
                        fullName : action.payload.fullName,
                        email : action.payload.email,
                        password : action.payload.password,
                        confirmPassword:action.payload.confirmPassword,
                        phoneNumber : action.payload.phoneNumber
                    }
                }
            })
            state.initData = updatedArry;
                        
        }
    }
})

export const {addData,removeData,editData} = formDataSlice.actions
export default formDataSlice.reducer