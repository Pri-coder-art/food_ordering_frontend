import { createSlice } from "@reduxjs/toolkit";

const cartSlice= createSlice({
    name:"cart",
    initialState:{
        items:[],
},
reducers:{
    addItem:(state, action)=>{

        // vanilla(older) redux=> DON'T MUTATE STATE, returning was mandatory
        // const newState=[...state];
        // newState.items.push(action.payload);
        // return newState;


        // Mutating the state here
        state.items.push(action.payload);
    },
    removeItem:(state, action)=>{
        state.items.pop();
    },
    clearCart:(state, action)=>{
        // state.items.length=0;
        // RTK - either Mutate the existing state or return a new state
        // state.items.length=0; // originalState=[]

        return {items:[]};// this new object will be replaced inside originalState={items:[]}
        
    },
},
});
export const {addItem, removeItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer;