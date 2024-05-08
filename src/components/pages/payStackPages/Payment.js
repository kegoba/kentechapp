import React from "react"
//import { Balance} from "../reducer/Action"
import { useSelector} from "react-redux"
 import {usePaystackPayment} from "react-paystack";

 import './app.css';
const onSuccess = (reference) => {
  console.log(reference);
  
  window.location = "/success"
 

};


const onClose = () => {
  console.log('closed')
}

const PaymentButton = () => {
 const paymentDetail = useSelector((state) => state.paymentDetail);
  const initializePayment = usePaystackPayment(paymentDetail);
  return (
    <div>
      <button 
      className="btn btn-info"
        onClick={() => {
          initializePayment(onSuccess, onClose);
        }}
      >
        Proceed{">>"}
      </button>
    </div>
  );
};

function Payment() {
     const paymentDetail = useSelector((state) => state.paymentDetail);


  return (
    <div className="payment ">
        <div className=" ">
        <div className="">
          <h5 className=""> Email : {paymentDetail.email}</h5>
          <p className="card-text"> transaction Ref : {paymentDetail.reference}</p>
          <div className="card-text">Amount :  {paymentDetail.view_amount}</div>
          <a href="#" className=""><PaymentButton  /></a>
        </div>
      </div>
      
    </div>
  );
}

export default Payment