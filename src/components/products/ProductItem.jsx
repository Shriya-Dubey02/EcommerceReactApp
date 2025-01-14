import React from 'react'


// we will be creating props 
function ProductItem({productName,productDescription,productPrice}) {
  return (
    <div>
       <div className="col">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{productName}</h5>
        <p class="card-text">{productDescription}</p>
        <p class="card-text">Price: {productPrice}</p>
        <button className='btn btn-success'>Update</button>
        <button className='btn btn-danger'>Delete</button>
      </div>
    </div>
  </div>





    </div>
  )
}

export default ProductItem
