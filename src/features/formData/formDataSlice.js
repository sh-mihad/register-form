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
            const targetIndex = state?.initData?.findIndex((element) => element.id === action?.payload?.id);
            state.initData[targetIndex] = action.payload                        
        },
        checkedAction : (state,action)=>{
            const targetIndex = state?.initData?.findIndex((element) => element.id === action?.payload);
            const data = [...state.initData]
            data[targetIndex]["isSelected"] = ! data[targetIndex]["isSelected"]
            state.initData = data
        },
        allCheckedAction : (state,action)=>{
         const data = [...state.initData]
         data?.map(element=>{
           if(action.payload){
            element.isSelected = true
           }else{
            element.isSelected = false
           }
         })
         state.initData = data;
        },
        changePassword : (state,action)=>{
            const targetedId = state.initData?.findIndex(element=>element.id === action.payload.id)
           state.initData[targetedId].password = action.payload.value;
        }
    }
})

export const {addData,removeData,editData,checkedAction,allCheckedAction,changePassword} = formDataSlice.actions
export default formDataSlice.reducer