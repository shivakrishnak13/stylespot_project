import { ADD_TO_CART, ERROR, GET_SUCCESS, REQUEST, SINGLE_PROD } from "./actionTypes"


const initialState={
    iserror:false,
    isloading:false,
    data:[],
    singleproduct:{},
    cart:[]
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
    case ADD_TO_CART:
        return {
            ...state,
            cart:[...state.cart,action.payload],
            iserror:false,
            isloading:false  
        }
    
    default : return state
}
}