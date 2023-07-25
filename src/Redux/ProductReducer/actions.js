import axios from "axios";
import {  ERROR, GET_SUCCESS, REQUEST, SINGLE_PROD } from "./actionTypes"
import { useSelector } from "react-redux";

let URL = "https://natural-lead-thrush.glitch.me";

export const getProduct = (params) => (dispatch) =>{
   // console.log(params)
   if(params.params.gender === "null" || !params.params.gender){
      delete params.params.gender;
   }
   dispatch({type:REQUEST});
   return axios.get(`${URL}/products`,params).then((res)=>{
   //   console.log(res.data,"data")
      dispatch({type:GET_SUCCESS,payload:res.data})
   }).catch((err)=>{
    dispatch({type:ERROR})
   })
};


export const singleProduct = (id) => (dispatch) => {
   // console.log("single product", id);
   dispatch({type:REQUEST});
   return axios.get(`${URL}/products/${id}`).then((res)=>{
      console.log(res.data)
      dispatch({type:SINGLE_PROD,payload:res.data});
   }).catch(()=>{
      dispatch({type:ERROR})
   })
};







