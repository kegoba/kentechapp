import { useState } from "react"


const  ReuseablePreview =(props) => {
  const [open, setOpen] = useState(false)
  const [selectedColor, setSelectedColor] = useState()
  const [selectedSize, setSelectedSize] = useState()

  return (
    <div>
      {/* The button to open modal */}
<label htmlFor="my_modal_6" className="btn">preview</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal" role="dialog">
  <div className="modal-box">
    <h3 className="">Selected Item</h3>
    <img className="py-4" src={props.image}/>
    <p className="mr-1o">  {props.product_price}   {props.product_desc} </p>
    <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn">Add To Cart</label>
      <label htmlFor="my_modal_6" className="btn">Close!</label>
    </div>
  </div>
</div>
    </div>
  )
}


export default ReuseablePreview