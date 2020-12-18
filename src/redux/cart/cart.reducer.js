import {CartActionTypes} from './cart.types'
import {addItemToCart,removeItemFromCart} from './cart.utils'
import Data from '../../components/shop.data'

const INITIAL_STATE = {
    cartItems : Data.map((data) => { return {...data, quantity: 1} })
};


const cartReducer = (state = INITIAL_STATE,action)=>{
    switch(action.type){
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems : addItemToCart(state.cartItems,action.payload)
            }
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems : removeItemFromCart(state.cartItems,action.payload)
            }
        case CartActionTypes.DELETE_ITEM:
            return{
                ...state,
                cartItems : state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }    
            
        default:
            return state         
    }
}

export default cartReducer