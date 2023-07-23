import { ERROR, GET_SUCCESS, REQUEST } from "./actionTypes"


const initialState={
    iserror:false,
    isloading:false,
    data:[],
}

export const reducer=(state=initialState,action)=>{
switch(action.type){
    case REQUEST:{
        return {
            ...state,
            isloading:true,
            iserror:false
        }
    }
    case ERROR:{
        return {
            ...state,
            iserror:true,
            isloading:false
        }
    }
    case GET_SUCCESS:{
        return {
            ...state,
            data:action.payload,
            loading:false,
            iserror:false
        }   
    }
    default : return state
}
}