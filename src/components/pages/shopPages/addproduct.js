import React, {Component} from "react";
import axios from "axios"
import { BASE_URL } from "../../asset/asset";

class Addproduct extends Component{
    constructor(){
        super()
  
        this.state={
            image : '',
            catergory : "",
            price: "",
            description:""


        }
    }
    onchangeImage = (e) => {
        var file = e.target.files[0]

       // console.log("state", file )
       // var image = Object.assign(file, this.state.image)
        this.setState({
            image:  file

        })
        
      
    }
    onchangeCatergory = (e) => {
        
        this.setState({
            catergory: e.target.value.toUpperCase()
        })
    }
    onchangePrice = (e) => {
        this.setState({
            price: e.target.value
        })
    }
    onchangeDescription = (e) => {
        this.setState({
            description: e.target.value.toUpperCase()
        })
    }
    
    handleSubmit = (e) =>{
        e.preventDefault()
        var {price, description,catergory} = this.state
        if( (price.length > 2) && (description.length > 2) && (catergory.length > 2)) {
            let form_data = new FormData();
            form_data.append( "image",this.state.image, this.state.image.name);
            form_data.append('product_price', price);
            form_data.append('product_desc', description);
            form_data.append('product_category', catergory);

            axios.post(BASE_URL+"/addproduct", form_data,{headers: {
                'content-type': 'multipart/form-data'
              }}
                )
            .then((resp)=>{
                console.log(resp)
            })
           
            this.setState({
                price :"",
                image: "",
                description: "",
                catergory : ""

            })
        } else{
            alert("field must not be empty")
           // console.log(formdata)
        }



    }

    render(){
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} >
                        
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <input type="text"
                                 placeholder="Produt Catergory" 
                                 className="text-center bg-gray-50 focus:ring-blue-500" 
                                 onChange={this.onchangeCatergory} 
                                 value={this.state.catergory}
                                 
                                  />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <input type="text" placeholder="Produt price" 
                                className="text-center bg-gray-50 focus:ring-blue-500"
                                 onChange={this.onchangePrice} 
                                 value={this.state.price} />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <input type="text" 
                                placeholder="Produt description" 
                                className="text-center bg-gray-50 focus:ring-blue-500" 
                                onChange={this.onchangeDescription} 
                                value={this.state.description} />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col" >
                                <input type="file" accept="image/*"
                                  className="text-center bg-gray-50 focus:ring-blue-500" 
                                  onChange={this.onchangeImage}  />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col" >
                                <button  className="btn btn-success"  > Submit </button>
                            </div>
                        </div>
                    </div>
                    
                </form>

            </div>
        )
    }

}


export default Addproduct;