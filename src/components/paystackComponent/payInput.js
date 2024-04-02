import React ,{Component} from "react"
//import { Link, useLocation} from "react-router-dom";
//import {usePaystackPayment} from "react-paystack";
import {connect} from "react-redux"
import { Make_payment } from "../reducerComponent/Action" // ../reducer/Action";
import {KEY} from "../asset/asset"


import { useNavigate } from "react-router-dom";

export const  withNavigation = (Component) => {
  return props => <Component {...props} navigate={useNavigate()} />;
}

const MapStateToProps = (state)=>({
    email : state.user.email
})

const MapDispatchToProps = (dispatch)=>({
   Make_payment : (amount)=>{
        dispatch(Make_payment(amount))

    }
})
class PayInput extends Component{
    constructor(){
        super()
        this.state ={
            amount : "",
            msg : "" ,
            error : false,

        }
    }
    onchangeAmount = (e)=>{
        this.setState({
            amount : e.target.value
        })

        console.log(this.state.amount)
    }
    handlePay=()=>{
        const {amount} = this.state
        const paymentDetail = {
          reference: new Date().getTime(),
          email: this.props.email,
          amount: amount * 100,
          publicKey: KEY,
          view_amount : amount,
        };
        let email = this.props.email
        if (!email){
            //const location = useLocation
            const from =this.props.location.pathname
            this.props.history.push("/login", from)

        }else{
            if (amount < 100) {
                this.setState({ error: true }, () => {
                    window.setTimeout(() => {
                        this.setState({
                            error: false
                        })
                    },4000)

                })
            } else {

                this.props.Make_payment(paymentDetail);
                this.props.navigate("/payment")

            }


        }
        
        

    }
  
    render(){
        return(
        <div className="reg-login">
            <form>
                    
                    <div className="container  ">
                        <div className="row">
                            <div className="col">
                                <input
                                    placeholder="Amount"
                                    type="text"
                                    className=""
                                    onChange={this.onchangeAmount}
                                    value={this.state.amount}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                 <p className="btn pay-1 btn-info"  onClick={()=>this.handlePay(this.state.amount)}>  {"Proceed >>>"}   </p>
                            
                            </div>
                        </div>
                    </div>   
            </form>
        </div>
        )}

}


export default withNavigation(connect(MapStateToProps, MapDispatchToProps) (PayInput));