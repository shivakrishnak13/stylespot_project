import { ERROR, GET_SUCCESS, REQUEST, SINGLE_PROD } from "./actionTypes"


const initialState={
    iserror:false,
    isloading:false,
    data:[],
    singleproduct:{}
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
            isloading:false,
            iserror:false
        }   
    }
    case SINGLE_PROD:
        return {
            ...state,
            singleproduct: action.payload,
            isloading:false,
            iserror:false
        }
    default : return state
}
}