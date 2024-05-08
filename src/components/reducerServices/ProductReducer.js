import {BASE_URL} from "../asset/asset"
import { ADD_TO_CART, REMOVE_ITEM, BALANCE, ADD_QTY, SUCCESS, SUB_QTY, LOGIN, PAY, LOGOUT}  from "./cart-actions"
import axios from "axios"

 const initial_state = {
    user:[],
    item:[],
    cart:[],
    cart_info : {  number_of_items: 0 },
    number_of_items : 0,
    total_cost : 0,
    balance: 0,
    quatity : 0,
    product_quatity : 1 ,
    
}


export const GetProduct=(state)=>{
    axios.get(BASE_URL+"/getallproduct")
        .then((resp) => {
            state = resp.data
            initial_state.item = Object.assign(initial_state.item, state)
            return state
        })   
}


export const AppReducer = (state=initial_state, action)=>{
    if(action.type === ADD_TO_CART){
        
        let cartItem = state.item.find(item => item.product_id === action.product_id)
        console.log(cartItem ,"cartiem", action)
        let user = action.user
        if (!state.cart){
            console.log(state.cart)
            let item_exist //= state.cart.find(item => item.product_id === action.product_id)

            if(item_exist){
                //alert("Item Exist In Your Cart")
                return {
                    ...state 
    
                }
            }else{
    
                let new_cost = parseInt(state.cart_info.total_cost) + parseInt(cartItem.product_price)
                let number_of_item = state.cart_info.number_of_items + 1
                let cart_info ={ total_cost : new_cost, number_of_items : number_of_item}
                
                return{
                    ...state , cart : [...state.cart , cartItem],
                    cart_info: cart_info
                    
                }
            }
        }

    }
    
    if (action.type === REMOVE_ITEM){
        let item_to_remove = state.cart.find(item => item.product_id === action.product_id)
        let item_exist = state.cart.filter(item => item.product_id !== action.product_id)
        let new_cost = (state.cart_info.total_cost) - (item_to_remove.product_price) 
        let number_of_item = state.cart_info.number_of_items -= 1
         let cart_info = { total_cost: new_cost, number_of_items: number_of_item }
        
        
        return {
            ...state, 
            cart : item_exist,
            cart_info: cart_info,
           
        }
        
    
    }
    if (action.type === BALANCE){
        const user = state.user.filter(user => user.email === action.email )
        if(user){
            const balance = state.user.balance + user.balance

        return {
                ...state, balance: balance
            }

        }
         
    }
    if (action.type === ADD_QTY){
        let cart =  state.cart.find(item => item.product_id === action.product_id)
        let new_cost = parseInt( state.total_cost) + parseInt(cart.product_price)
       let quatity_to_remove  = state.quatity += 1
        let number_of_item = state.number_of_items += 1;
        let QTY = (state.product_quatity += 1);
       
       return {
           ...state, total_cost: new_cost, 
           quatity : quatity_to_remove,
           number_of_items : number_of_item,
           product_quatity : QTY,
       }
    } if (action.type === SUB_QTY) {
        let cart = state.cart.find(
          (item) => item.product_id === action.product_id);
        let new_cost = parseInt(state.total_cost) - parseInt(cart.product_price);
        let quatity_to_remove = (state.quatity -= 1);
         let number_of_item = state.number_of_items -= 1;
         let QTY = (state.product_quatity -= 1);
        return {
          ...state,
          total_cost: new_cost,
          quatity: quatity_to_remove,
          number_of_items : number_of_item,
          product_quatity : QTY
        };

       
      }
       if (action.type === LOGIN){
            let user = action.user
           return {
               ...state, user : user,
              
           }
       }
       if (action.type === LOGOUT) {
           let user = undefined
           console.log("log out")
           return {
               ...state, user: user,

           }
       }
       if (action.type === PAY){
           let paymentDetail = action.paymentDetail;
          // console.log("redux", paymentDetail)
           return {
             ...state,
             paymentDetail: paymentDetail,
           };
       }

       if (action.type === SUCCESS){
           let transaction_info = action.transaction_info

           return {
               ...state,
               transaction_info : transaction_info
           }
       }
       else {
        return state;
      }

}
    