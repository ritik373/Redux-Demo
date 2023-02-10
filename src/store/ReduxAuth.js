import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState={
    counter:0,
    showCounter:true,
}


const counterSlice=createSlice({
    name:"counter",
    initialState:initialState,
    reducers:{
        increase(state){
            state.counter++;
        },
        decrease(state){
            state.counter--;
        },
        toggle(state){
            state.showCounter=!state.showCounter;
        }
    },
})

const authState={
    Authenticatin:false,
}


const authenticationSlice=createSlice({
    name:"authentication",
    initialState:authState,
    reducers:{
        logIn(state){
            state.Authenticatin=true;
        },
        logOut(state){
            state.Authenticatin=false;
        },
    }
})

// const CounterReducer=(state=initialState,action)=>{
//     if(action.type==='increment'){
//         return{
//             counter:state.counter + action.amount,
//             showCounter:state.showCounter,
//         }
//     }
//     if(action.type==='decrement'){
//         return{
//             counter:state.counter -5,
//             showCounter:state.showCounter,
//         }
//     }
//     if(action.type==='toogle'){
//         return{
//             counter:state.counter,
//             showCounter: !state.showCounter,
//         }
//     }
//     return state;

// }


const store=configureStore({
    reducer:{
        counter:counterSlice.reducer ,
        auth:authenticationSlice.reducer,
    },
});
export  const counterAction=counterSlice.actions;
export  const AuthAction=authenticationSlice.actions;


export default store;