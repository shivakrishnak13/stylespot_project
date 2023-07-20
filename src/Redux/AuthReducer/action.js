// export function login(payload) {
//     return { type: 'LOGIN',payload };
//   }

import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, SIGNUP_SUCCESS } from "./actionType"

  
//  export function logout() {
//     return { type: 'LOGOUT' };
//   }
  

export const createAccount = (payload) => (dispatch) =>{
        dispatch({type:LOGIN_REQUEST});
      
   return axios.post("",payload).then((res)=>{
      console.log("account created",res.data);
      dispatch({type:SIGNUP_SUCCESS});
    }).catch((err)=>{
      dispatch({type:LOGIN_FAILURE})
    })
   
}