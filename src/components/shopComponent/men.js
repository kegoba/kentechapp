import React, {Component} from "react"
import axios from "axios"
import {BASE_URL} from "../asset/asset"
import { AddToCart } from "../reducerComponent/Action"
import { connect } from "react-redux"
import { GetProduct } from "../reducerComponent/ProductReducer"
import {NotificationManager} from "react-notifications"

const MapStateToProps = (state)=>{
    return state
}

const MapDispatchToProps = (dispatch) => ({
    AddToCart: (product_id) => {
        dispatch(AddToCart(product_id))

    }

})


class Men extends Component{
    constructor(){
        super()
        this.state = {
            men : [],
            show : "",
            

        }
    }
   //componentDidMount
    componentDidMount(){
       /* GetProduct()
        axios.get(URL+ "/men/")
        .then((resp)=>{
            this.setState({
                men : resp.data
            })
        })
    }
    handleToCart(product_id, name, price) {
        this.props.AddToCart(product_id)
        this.setState({show: true}, ()=>{
   
    })*/
     }
Notification = ()=>{
    NotificationManager.info("Item Added successful", "", 1000)

}
    

    render(){
        let men = this.state.men
        return (
          <div>
           

            <div className="container men ">
              <p className=""> Men's Wear </p>
              {men.length? 
              <div className="product-row">
                {men.map((item, key) => (
                  <div
                    key={key}
                    className="product-col"
                    onClick={() => this.handleToCart(item.product_id)}
                   
                  >
                    <span className="card card-body">
                      <img
                        className="image "
                        src={URL + item.image}
                        alt={item.image}
                      />
                      <span className=" addTocart  btn-info" onClick={(() => this.handleToCart(item.product_id), this.Notification)}> + </span>
                      &#8358;{ item.product_price}
                    </span>
                  </div>
                ))}
              </div>
              : 
              <h4> Loading Product... </h4>
              }
            </div>
          </div>
        );
    }
    
} 


export default connect(MapStateToProps, MapDispatchToProps)(Men)