import { createSlice } from "@reduxjs/toolkit";
const cartUiShopping = createSlice({
    name:"cartUi",
    initialState:{cartIsVisible:false},
    reducers:{
        toggle(state){
            state.cartIsVisible = !state.cartIsVisible
        }
    }
})
export const cartUiActions = cartUiShopping.actions
export default cartUiShopping
