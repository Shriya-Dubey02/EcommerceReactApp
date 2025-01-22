import React, { useEffect, useState } from 'react'
import { addProduct, updateProduct } from '../../services/ProductService'

// onAddProduct is a prop
function ProductForm({onAddProduct,selectedProduct,setSelectedProduct}) {

// function to be called when form will be submitting
let[product,setProduct]=useState({productId:'',productName:'',productDescription:'',productPrice:''});

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
useEffect(()=>{
 if(selectedProduct)
  setProduct(selectedProduct); // to show value in form 
},[selectedProduct])

// ==========================================================
// to control change in input box

const handleChange=(e)=>{

 // console.log(e.target)
  let{name,value}=e.target;
  // console.log(name+" "+value);
  setProduct((prevProduct)=>{
    console.log(prevProduct); //to get the last product
    return{...prevProduct,[name]:value};

  })
}
// ============================================================
// To handle a update
const updateHandler=(e)=>{
  e.preventDefault();
  console.log("update Handler invoked")
  // console.log(selectedProduct._links.self.href)
  updateProduct(selectedProduct._links.self.href,{
    productName: e.target.productName.value,
    productDescription: e.target.productDescription.value,
    productPrice: e.target.productPrice.value
  
  }).then(data=>{
    onAddProduct();
    setProduct({productId:'',productName:'',productDescription:'',productPrice:''}) // for resetting the form
    setSelectedProduct(null); // 22 jan for changing the products when we click on update
  })


  
}




// ============================================================

  return (
    <div className="container border border-danger border-3 p-3 my-6">
      
      <form onSubmit={selectedProduct?updateHandler:submitHandler}>
        <h1 className='bg-danger p-3 text-white text-center'>Add Product</h1>
        {/* Product Id */}
      <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label" >Product Id</label>
    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="productId"
    value={product.productId} onChange={handleChange}/>
  </div>

   {/* Product name */}
   <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label" >Product name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="productName"
    value={product.productName} onChange={handleChange}
    />
  </div>

   {/* Product Description */}
   <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label" >Product Description</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="productDescription"
    value={product.productDescription} onChange={handleChange}/>
  </div>

   {/* Product Price */}
   <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label" >Product Price</label>
    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="productPrice"
    value={product.productPrice} onChange={handleChange}/>
  </div>



{/* Button to submit form */}

{
   selectedProduct?<button type="submit" className="btn btn-primary">Update</button>:<button type="submit" className="btn btn-primary">Submit</button>
}
  


      </form>
    </div>
  )
}

export default ProductForm
