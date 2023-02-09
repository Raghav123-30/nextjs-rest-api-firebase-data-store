// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     isAuthenticated : false
// }

// const authSlice = createSlice(
//     {
//         name : 'auth',
//         initialState,
//         reducers:{
//             login : state => {
//                 state.isAuthenticated = true;
//             },
//             logout : state => {
//                 state.isAuthenticated = false;
//             }
//         }
//     }
// )

// export const {actions,reducer} = authSlice;ate

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers:{
       login : state => {
        state.isAuthenticated = true
       },
       logout : state => {
        state.isAuthenticated = false;
       }
    }
})


export const {actions, reducer} = authSlice;