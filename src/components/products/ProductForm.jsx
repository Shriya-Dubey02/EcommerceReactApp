import React, { useState } from 'react'
import { addProduct } from '../../services/ProductService'

// onAddProduct is a prop
function ProductForm({onAddProduct}) {
  let[searchQuery,setSearchQuery]=useState("");
  const searchFunction=(e)=>{
    setSearchQuery(e.target.value);
  
  }

// function to be called when form will be submitting

const submitHandler=(e)=>{
  e.preventDefault();

  addProduct({
    productId: e.target.productId.value,
    productName: e.target.productName.value,
    productDescription: e.target.productDescription.value,
    productPrice: e.target.productPrice.value

  }).then(data=>{
    onAddProduct();
    return data;
  })
}


// ============================================================


  return (
    <div className="container border border-danger border-3 p-3 my-6">
      
      <input type="text" onChange={searchFunction} />



      <form onSubmit={submitHandler}>
        <h1 className='bg-danger p-3 text-white text-center'>Add Product</h1>
        {/* Product Id */}
      <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label" >Product Id</label>
    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="productId"/>
  </div>

   {/* Product name */}
   <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label" >Product name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="productName"/>
  </div>

   {/* Product Description */}
   <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label" >Product Description</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="productDescription"/>
  </div>

   {/* Product Price */}
   <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label" >Product Price</label>
    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="productPrice"/>
  </div>

{/* Button to submit form */}
  <button type="submit" className="btn btn-primary">Submit</button>


      </form>
    </div>
  )
}

export default ProductForm
