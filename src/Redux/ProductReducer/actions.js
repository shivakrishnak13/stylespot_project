import axios from "axios";
import { ADD_SUCCESS, ERROR, GET_SUCCESS, REQUEST } from "./actionTypes"

let URL = "http://localhost:8080";

export const getData=(page)=>(dispatch)=>{
dispatch({type:REQUEST});

axios.get('https://dapper-precious-sedum.glitch.me/products').then((res)=>{
    let lim=6*page;
    let a=lim-6;
    let dat=res.data.filter((ele,i)=>{
       if(i<lim&&i>=a){
         return true; 
       }else{
          return false;
       }
 
    })
   
    console.log(res)
}).catch((err)=>{
   dispatch({type:ERROR}); 
})

}

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




