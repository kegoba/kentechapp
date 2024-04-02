import React, { Component } from "react"
import {BASE_URL, IMAGE_URL} from "../asset/asset"
import { RemoveItem, Add_qty, Sub_qty, } from "../reducerComponent/Action"
import { connect } from "react-redux"
//import Payment from "./Payment"
import axios from "axios"
const MapStateToProps = (state)=>{
    return{
        item: state.cart,
        cost: state.total_cost,
        number_of_item : state.number_of_items,
        product_quatity : state.product_quatity,
        email: state.email,
        user_id: state.user_id,
        cart_info : state.cart_info
        
    }
}
const MapDispatchToProps =(dispatch)=>({
    RemoveItem : (product_id)=>{
        dispatch(RemoveItem(product_id))
    },
    Add_qty : (product_id)=>{
        dispatch(Add_qty(product_id))
    },
    Sub_qty : (product_id) =>{
        dispatch(Sub_qty(product_id))
    }
})



class Cart extends Component {
    constructor() {
        super()
        this.RemoveCart = this.RemoveCart.bind(this)
        this.SubQTYCart = this.SubQTYCart.bind(this);
        this.AddQTYCart = this.AddQTYCart.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.state = {
            user : [],
            cost : 0,
            items: [],
            exsit : false,
            balance : 2,
            order : false,
            msg : ""

        }
    }
    componentDidMount(){
       const user = this.props.user
       this.setState({
           user : user
       })
    }

   
    RemoveCart=(product_id)=>{
        this.props.RemoveItem(product_id)
    }
    AddQTYCart = (product_id) =>{
         this.props.Add_qty (product_id);

    }

    SubQTYCart = (product_id)=>{
        this.props.Sub_qty(product_id)
    }
    handlePayment(item, cost){
        if(item){
            let balance = this.state.balance
            if (balance < cost){
               // alert("insufficient Fund, kindly Fund Your Account")
            }
            
        } else{
           // alert("No Item In The Cart") 
        }
     
    
    }

    handleCheck=()=>{
        let  item  = this.props.item
        let  cost = this.props.cost
        let  user_id = this.props.user_id
        let from = this.props.location.pathname
        if(!user_id){
            this.props.history.push("/login", from);

        }
        else{
           
            let data = JSON.stringify(item)
            const postdata = {order_item: data, total_price : cost }
            axios.post(BASE_URL+ "/order" + user_id + "/", postdata)
                .then((resp) => {
                    if (resp.status ===200){
                        this.setState({ order: true, msg : "Order  Successful"}, () => {
                            window.setTimeout(() => {
                                this.setState({
                                    order: false
                                })
                            }, 6000)
                        })
                    }else{
                        this.setState({ order: true}, () => {
                            window.setTimeout(() => {
                                this.setState({
                                    order: false, msg: "Order  Not Successful error"
                                })
                            }, 6000)
                        })
                    } 
                })
                .catch((error)=>{
                    this.setState({ order: true }, () => {
                        window.setTimeout(() => {
                            this.setState({
                                order: false, msg: "Order  Not Successful error"
                            })
                        }, 6000)
                    })
                   
                })
            //alert("Order successful")
        }
        

    }
    render() {
       const items  = this.props.item;
       let number_of_item = this.props.cart_info['number_of_items'];
       // let QTY = this.props.product_quatity;
        const cost = this.props.cost.toFixed(2)
        console.log(cost, "cart info")
        return (  
               
        <div> 
            {!items.length ?
            (<div className="container no-item">
              <h2>  No Item In The Cart  </h2>
            </div> ):
                (
        <div>
                    
                    <div className="container cart  animated swing">
                               
                                
                        <div className="product-row">
                            {items.map((item, key) =>
                                <div key={key} className="product-col  ">
                                    <span className=" product-cart ">
                                       
                                        <span className=" card card-body"> 
                                        <img className="image  " src={IMAGE_URL + item.image}  alt={item.image} />
                                    
                                        
                                        <span className=" removeFromCart  btn-info" onClick={() => this.RemoveCart(item.product_id)}> - </span>
                                      
                                        <span className="">   &#8358;{ item.product_price} </span> 
                                     </span>
                                     </span>
                                </div>
                    
                            )}
                        </div>
                        <h4 className=" " > Cost of {number_of_item}  Item (s)  &#8358;{cost.toLocaleString()}   </h4>
                    </div>
                    <div className="constainer pay">
                        <div className="row">
                            <div className="col">
                                <h4 className="  btn-info" onClick={this.handleCheck}>  Check Out </h4>
                            </div>
                        </div>
                        </div>
         </div>
        )}        
    </div>
        )
    }  
}

export default  connect(MapStateToProps, MapDispatchToProps)(Cart);