
import { ADD_TO_CART, REMOVE_ITEM, BALANCE, SUB_QTY,SUCCESS , ADD_QTY, LOGIN, PAY , LOGOUT} from './cart-actions'

export const AddToCart = (product_id)=>{
    return{
        type : ADD_TO_CART,
        product_id 
    }
}




export const RemoveItem = (product_id)=>({
type : REMOVE_ITEM,
    product_id

})



export const Balance =  (email)=>({
    type : BALANCE ,
    email
})

export const Add_qty =(product_id)=>({
    type : ADD_QTY,
    product_id
})


export const Sub_qty =(product_id)=>({
    type : SUB_QTY,
    product_id
})

export const Login_action =(user)=>({
    type  : LOGIN,
    user
})
export const Logout_action=(user)=>({
    type : LOGOUT,
    user
})
export const Make_payment = (paymentDetail) => ({
         type: PAY,
         paymentDetail,
       });
export const Transaction_details= (transaction_ifo)=>({
    type: SUCCESS,
       transaction_ifo
})

