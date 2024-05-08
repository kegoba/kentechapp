import {useEffect, useState} from "react"
import axios from "axios"
import { useNavigate } from "react-router"
import { Link} from 'react-router-dom'
import ReuseablePreview from "./reuseablepreview"

import {BASE_URL, IMAGE_URL} from "../../asset/asset"



  
  export default function Products(props) {
    const navigate = useNavigate();

    const [products, setProducts] = useState([])
    var  [preview , setPreview] = useState(false)
    const [itemToPreview, setIemToPreview] = useState([])
      useEffect(() => {
        async function Getproduct() {
          let response = await axios(BASE_URL+"/getallproduct")
          //response = await response.json()
          setProducts(response.data)
          
        }
       
    
        Getproduct()
      }, [])

      let handleToCart = (product_id) => {
        
        const productCart = products.filter(item=> item.product_id===product_id)
        setPreview(preview= true)
        setIemToPreview(productCart ) 
             navigate("/preview-item/"+product_id)
      }

      const Add_to_cart=(product_id)=>{
        const cart = products.filter(item=> item.product_id===product_id)
        
        //do a post to save cart

      }

      
      const myproducts = products.map((product, key) => (
              <div key={key} className="group relative" onClick={(() => handleToCart(product.product_id))}>
                
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={IMAGE_URL + product.image}
                    alt={IMAGE_URL + product.image}
                    
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm ">
                      <a>
                        <span aria-hidden="true" className="absolute  text-slate-400" />
                        {product.product_desc}
                      </a>
                    </h3>
                    <span className="mt-1 text-sm  text-center text-slate-400">
                    <Link to={"/preview-item/"+product.product_id} >  Order  </Link>
                       </span>
                  </div>
                  <p className="text-sm font-medium text-slate-400 ">&#8358;{Number(product.product_price).toLocaleString()} </p>
                </div>
              </div>
              
            ))
    return (
      <div className="">
        <div className="mx-auto max-w-2xl px-4 py-4 text-slate-400 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-4">
          <h2 className="text-2xl font-bold  text-slate-400 tracking-tight ">Products Pages</h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {myproducts}
          </div>
        </div>
      </div>
    )
  }
  