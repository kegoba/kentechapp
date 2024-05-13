import React from "react"
import axios from "axios"
import { BASE_URL } from "../asset/asset"




export const getProductList = async ()=> {
    return await axios.get(BASE_URL + "/getallproduct")
      .then(resp => resp)
  }
  


  export const postItem  =  (item) => {
   return axios.post('http://localhost:3333/list', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify({ item })
   })
     .then(data => data.json())
  }