import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom"

//self import component
import Pricing from "../statics/price"
import {AddToCart} from "../reducerServices/Action"
import {getProductList} from "../services/productServices"
import { IMAGE_URL} from '../asset/asset';
import { Gallary} from "../gallary/Gallary"
import {NotificationManager} from "react-notifications"
import { FaS } from 'react-icons/fa6';
//import Products from "../shopComponent/products";



const  Home = ()=> {

  const [product, setProduct] = useState([])

  React.useEffect(()=>{
    let loaded = true
    getProductList()
    .then(items=>{
      if (loaded){
        setProduct(items)
      }
     
    })
    console.log(product,"product")
    return () => loaded = false

  }, [])
  
  const handleToCart = (product_id) => {
    console.log(product_id);
    //this.props.AddToCart(product_id);
    
  };

  const handleWomenRoute = () => {
    //this.props.navigate("/women");
  };

  const handleMenRoute = () => {
    //this.props.navigate("/men");
  };
    
  const feature_products  = () =>
      product.map((item , key)=> (
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

export default  Home;
