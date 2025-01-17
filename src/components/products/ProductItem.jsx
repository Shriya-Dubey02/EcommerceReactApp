import React from 'react'
import { getProductsById } from '../../services/ProductService'


// we will be creating props 
function ProductItem({productName,productDescription,productPrice,product_link,onSelectProduct}) {
// Updating product
  const onSelectUpdate=async (link)=>{
  //  console.log(link);
  let product=await getProductsById(link);
  onSelectProduct(product);

  }

  return (
    <div>
       <div className="col">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{productName}</h5>
        <p class="card-text">{productDescription}</p>
        <p class="card-text">Price: {productPrice}</p>
        {/* Update Button */}
        <button className='btn btn-success' onClick={()=>{onSelectUpdate(product_link)}}>Update</button>
        {/* Delete Button */}
        <button className='btn btn-danger'>Delete</button>
      </div>
    </div>
  </div>





    </div>
  )
}

export default ProductItem
