import React, { useEffect, useState } from 'react'
import { getProducts } from '../../services/ProductService'
import ProductItem from './ProductItem'
import ProductForm from './ProductForm'

function Product() {
 let[products,setProducts]= useState([])
 let[searchQuery,setSearchQuery]=useState("");
 let[repositories,setRepositories]=useState([]);
 let[selectedProduct,setSelectedProduct]=useState(null);


 const searchFunction=(e)=>{
   setSearchQuery(e.target.value);
 
 }

//  we are using this to mount products
 useEffect(()=>{
  getProducts().then(data=>{
    setProducts(data);
  })


 },[])

 // To referesh all product when you add product
 const refreshProducts=()=>{
  getProducts().then(data=>{
    setProducts(data);
  })
 }
// To set selected product
const handleSelectProduct=(selectedProduct)=>{

  setSelectedProduct(selectedProduct);
  console.log(selectedProduct);
}
  return (
    <div>

<div class="container">
  <div class="row">
    <div class="col">

    <input type="text" onChange={searchFunction} />
      {/* Product Form: Start */}
      <ProductForm onAddProduct={refreshProducts}  selectedProduct={selectedProduct} /> 
      
      {/* to add product without refreshing */}

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
         product_link={p._links.self.href}
         onSelectProduct={handleSelectProduct}
        
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
