import React, { Component } from "react"
import {connect} from "react-redux"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios"
import Slider from "react-slick";
import {  Routes, Route,Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";


//self import component
import Pricing from "../statics/price"
import {AddToCart} from "../reducerComponent/Action"
import {GetProduct} from "../reducerComponent/ProductReducer"
import {BASE_URL, IMAGE_URL} from "../asset/asset"
import { Gallary} from "../gallary/Gallary"
import {NotificationManager} from "react-notifications"
//import Products from "../shopComponent/products";





const MapStateToProps =(state)=>{
    return {
        items : state.item ,
        cart : state.cart,
        user : state.user
    }
    
}

const MapDispatchToProps= (dispatch)=>({
    
    AddToCart: (product_id)=>{
        dispatch(AddToCart(product_id))
        
    }

})





export const  withNavigation = (Component) => {
  return props => <Component {...props} navigate={useNavigate()} />;
}

class Home extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      men: [],
      women: [],
      message: "",
      show: false,
      feature_product  : []
    };
  }



  componentDidMount() {
    GetProduct();
    let user = this.props.user
    //console.log(user["email"], "user from home")
    axios.get(BASE_URL + "/getallproduct").then((resp) => {
      let data = resp.data;
      console.log(resp.data)
      let women = data.filter((item) => item.product_category === "WOMEN");
      let men = data.filter((item) => item.product_category === "MEN");
      let women_wear = women.slice(1, 7);
      let men_wear = men.slice(1, 7);
      this.setState({
        items: data,
        men: men_wear,
        feature_product :data,
        women: women_wear,
      });
    }); 
  }

  Notification = () => {
    NotificationManager.info("Item Added Successfully", "", 1000);
  };

  handleToCart = (product_id) => {
    console.log(product_id);
    this.props.AddToCart(product_id);
    
  };

  handleWomenRoute = () => {
    this.props.navigate("/women");
  };

  handleMenRoute = () => {
    this.props.navigate("/men");
  };
  render() {
    let women = this.state.women;
    let men = this.state.men;
    let feature_product = this.state.feature_product
    const feature_products  = () =>
      feature_product.map((item , key)=> (
        <div
          key={key}
          className="product-col "
          onClick={() => this.handleToCart(item.product_id)}
        >
          <span>
            <img
              className="image "
              src={IMAGE_URL+item.image
            }
              alt={item.image}
            />
            <span
              onClick={
                (() => this.handleToCart(item.product_id),
                  this.Notification)
              }
              className=" addTocart  btn-info"
            >
              +
                    </span>
            &#8358;{Number(item.product_price)}
          </span>
        </div>
      ));

    return (
      <div>
        <div>
          <div className="container gallary">
            <Gallary />
          </div>
           <h3 className="mt-5 text-2xl"> Feature Products...</h3>
          <div className="container mobile_view mt-10 mb-10">
            <Slider
            className="featured_product-mobile-view"
              dots={false}
              slidesToShow={2}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={3000}
            >
              {feature_products()}
            </Slider>
          </div>
          <div className="container desktop_view mt-10 mb-10 h-10">
            <Slider
              className="featured_product"
              dots={false}
              slidesToShow={4}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={3000}
            >
              <div>
                
              </div>
              {feature_products()}
            </Slider>
          </div>

        
        </div>
        <div>
 
          
            
         
            
        </div>

        <div className='pricing-app'>
        <Pricing/>
          </div>

      </div>
    );
  }
}

export default  withNavigation(connect(MapStateToProps,MapDispatchToProps)(Home));
