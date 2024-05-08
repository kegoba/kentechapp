import {useEffect, useState} from "react"
import ReuseablePreview from "./reuseablepreview"
import {useParams} from "react-router-dom"
import axios from "axios"
import {BASE_URL, IMAGE_URL} from "../../asset/asset"




const ProductPreview = (props)=>{
    const params = useParams()
    const [quantity, setQuantity] = useState("1")
    const [price, setPrice] = useState("")
    const [total_price, setTotal_price] = useState("") 
    const [productId, setProductId] = useState("") 
    const [item, setItem] = useState([])
    const Shipping = Number(1000)

    useEffect(() => {
        async function Getproduct() {
          let response = await axios(BASE_URL+"/getproduct/" + params.id +"/")//getallproduct
          setItem(response.data)
          let data = response.data
          data.forEach(e => {
            setPrice(e.product_price)
            setProductId(e.product_id)
            
            
          });

         
        }
        
        Getproduct()
      }, [])


    
      const handleQantity =(e)=>{
        e.preventDefault()
        setQuantity (e.target.value)
        console.log(quantity)
        let total = (Number(price) * Number(quantity)) + Shipping
        setTotal_price(total)

      }
      
const handleCheckOut =()=>{
  let data ={  "product_id" : productId,
                "quantity"  : quantity
 

  }
}
/*
{preview && 
        itemToPreview.map((item)=>
        <ReuseablePreview onClick={(()=>Add_to_cart(item.product_id))} 
        image={IMAGE_URL+item.image} 
        product_price={item.product_price}
        product_desc = {item.product_desc}
        />
        )}

*/


    return (
      <div className="container"> 
       <div className=" container mt-10 product-preview">
        {item.map((item, key)=>(
            <div key={key}className="card lg:card-side items-center ">
            <figure className="w-17"><img src={IMAGE_URL+item.image} alt={IMAGE_URL+item.image}/></figure>
            <div className="card-body">
              <h2 className="card-title">&#8358;{item.product_price} </h2>
              <div className="rating">
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-black-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-black-400"  />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-black-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-black-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-black-400" />
            </div>
            <div className="card-title"> Qantity 
            <div className="mt-2">
                <input
                 onChange={handleQantity}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  value={quantity}
                  type="number"
                />
              </div>
             </div>
              <p>{item.product_desc}.</p>
              <div className="card-actions justify-end">
                <button className="btn w-5 btn-black bg-black-400">Add To Cart</button>
              </div>
            </div>
          </div>
          ))}

          
      </div>
      <div className="container">
      <div className="mt-6 cart  rounded-lg  border bg-white p-6 shadow-md md:mt-0 md:w-1/3 container">
        <div className="mb-2 flex justify-between">
          <p class="text-gray-700">Subtotal</p>
          <p class="text-gray-700"> &#8358;{price}</p>
        </div>
        <div class="flex justify-between">
          <p class="text-gray-700">Shipping</p>
          <p class="text-gray-700">&#8358; {Shipping}</p>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between">
          <p className="text-lg font-bold">Total</p>
          <div className="">
            <p className="mb-1 text-lg font-bold">&#8358; {total_price}</p>
            <p class="text-sm text-gray-700">including VAT</p>
          </div>
        </div>
        <button onClick={handleCheckOut} class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
      </div>

      </div>
   
      </div>
      
    )
}



export default ProductPreview