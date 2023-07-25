import { ADD_TO_CART, DECREMENT_QUANTITY, ERROR, GET_SUCCESS, INCREMENT_QUANTITY, REMOVE_FROM_CART, REQUEST, SINGLE_PROD } from "./actionTypes"


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
    case REMOVE_FROM_CART :
        return {
            ...state,
            cart: [...state.cart].filter((item) => item.id!== action.payload),
        }
    case INCREMENT_QUANTITY:
        return {
            ...state,
              cart: state.cart.map((item) =>
              item.id === +action.payload ? { ...item, quantity: item.quantity + 1 ,totalprice: item.price * (item.quantity + 1)} : item
            ),
          };
    case DECREMENT_QUANTITY:
        return {
            ...state,
               cart : state.cart.map((item) => 
               item.id === +action.payload ? {...item,quantity: item.quantity - 1,totalprice: item.price * (item.quantity - 1)} : item
            )
        }
    default : return state
}
}