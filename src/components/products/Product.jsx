import React, { useEffect, useState } from 'react'
import { getProducts } from '../../services/ProductService'
import ProductItem from './ProductItem'
import ProductForm from './ProductForm'

function Product() {
 let[products,setProducts]= useState([])

//  we are using this to mount products
 useEffect(()=>{
  getProducts().then(data=>{
    setProducts(data);
  })


 },[])


  return (
    <div>

<div class="container">
  <div class="row">
    <div class="col">
      {/* Product Form: Start */}
      <ProductForm/> 

      {/* Product Form: End */}

    </div>
    <div class="col">
       {/* Displaying Products : Start*/}
       <div class="row row-cols-1 row-cols-md-2 g-4">
      
      {products.map((p)=>{
       return(
         <ProductItem 
         productName={p.productName}
         productDescription={p.productDescription}
         productPrice={p.productPrice} // this is coming from the api
         />
       )
      })}
      </div>




    {/* Displaying Products : End*/}

    </div>
   
  </div>
</div>
        
     


    </div>
  )
}

export default Product
