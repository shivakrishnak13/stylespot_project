import axios from "axios";
import {  ERROR, GET_SUCCESS, REQUEST } from "./actionTypes"

let URL = "http://localhost:8080";

export const getProduct = (params) => (dispatch) =>{
   if(!params.params.gender){
      delete params.params.gender;
   }
   dispatch({type:REQUEST});
   return axios.get(`${URL}/products`,params).then((res)=>{
     console.log(res.data)
      dispatch({type:GET_SUCCESS,payload:res.data})
   }).catch((err)=>{
    dispatch({type:ERROR})
   })
};

export const genderFilter=(by,page)=>(dispatch)=>{
    dispatch({type:REQUEST});

    axios.get('https://dapper-precious-sedum.glitch.me/products').then((res)=>{
        let op; 
    if(by!==''){
       op=res.data.filter((ele)=>{
         if(ele.gender===by){
           return true 
         }else{
            return false
         }
        })
    }
    if(op===undefined){
        let lim=6*page;
        let a=lim-6;
        let dat=res.data.filter((ele,i)=>{
           if(i<lim&&i>=a){
             return true; 
           }else{
              return false;
           }
     
        })
     
    }else{
        let lim=6*page;
        let a=lim-6;
        let dat=op.filter((ele,i)=>{
           if(i<lim&&i>=a){
             return true; 
           }else{
              return false;
           }
     
        })
       
    }
        console.log(res)
    }).catch((err)=>{
       dispatch({type:ERROR}); 
    })
}




