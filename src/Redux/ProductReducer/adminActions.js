//ADMIN ACTIONS

import axios from "axios";
import { ADD_SUCCESS, DELETE_SUCCSESS, EDIT_SUCCESS, ERROR, GET_SUCCESS, REQUEST } from "./actionTypes";

let URL = "http://localhost:8080";

export const addProduct = (payload) => (dispatch) =>{
    dispatch({type:REQUEST});

    return axios.post(`${URL}/products`,payload).then((res)=>{
      console.log(res.data)
       dispatch({type:ADD_SUCCESS})
    }).catch((err)=>{
     dispatch({type:ERROR})
    })


};

export const getProduct = (dispatch) =>{
    dispatch({type:REQUEST});
    return axios.get(`${URL}/products`).then((res)=>{
      console.log(res.data)
       dispatch({type:GET_SUCCESS,payload:res.data})
    }).catch((err)=>{
     dispatch({type:ERROR})
    })
};

export const deleteProduct = (id) => (dispatch) =>{
    dispatch({type:REQUEST});

    return axios.delete(`${URL}/products/${id}`).then((res)=>{
      console.log(res.data)
       dispatch({type:DELETE_SUCCSESS})
    }).catch((err)=>{
     dispatch({type:ERROR})
    })


};

export const editProduct = (id,payload) => (dispatch) =>{
    dispatch({type:REQUEST});

    return axios.patch(`${URL}/products/${id}`,payload).then((res)=>{
      console.log(res.data)
       dispatch({type:EDIT_SUCCESS})
    }).catch((err)=>{
     dispatch({type:ERROR})
    })


};