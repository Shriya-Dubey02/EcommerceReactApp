import React, { useEffect, useState } from 'react'
import { deleteProduct, getProductsById } from '../../services/ProductService'
import { getCategories } from '../../services/CategoryService'


// we will be creating props 
function ProductItem({productName,productDescription,productPrice,product_link,onSelectProduct,onDeleteProduct}) {

  let[category,setCategory]=useState([])

  // const fetchCategories=async ()=>{
  //   setCategory(await getCategories())
    
  // }

  // useEffect(()=>{
  //   fetchCategories();

  // },[])

  useEffect(()=>{
    getCategories().then(data=>{
      setCategory(data)
    })
  },[])

  // ======================================================
// Updating product
  const onSelectUpdate=async (link)=>{
  //  console.log(link);
  let product=await getProductsById(link);
  onSelectProduct(product);

  }
// =========================================================
// Function to Delete Product
 
const onSelectDelete=async (product_id_link)=>{

  const deletePr =await deleteProduct(product_id_link)
  onDeleteProduct();
}

// =========================================================
  return (
    <div>
       <div className="col">
    <div class="card">
      <div class="card-body">

      <img src={product_link+"/image"} class="card-img-top" alt="..."/>

        <h5 class="card-title">{productName}</h5>
        <p class="card-text">{productDescription}</p>
        <p class="card-text">Price: {productPrice}</p>
        
        {/* to add categories for product: 27 Jan */}
        {/* Showing categories */}
        <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
    Select Category
  </button>
  
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
  
    {category.map((cat)=>{
      

      return(
        <li><button class="dropdown-item" type="button">Act</button></li>

      )
    })}
  </ul>
</div>




      {/* ================================================ */}


     
        {/* Update Button */}
        <button className='btn btn-success' onClick={()=>{onSelectUpdate(product_link)}}>Update</button>

        {/* Delete Button */}
        <button className='btn btn-danger'
        onClick={()=>{onSelectDelete(product_link)}}>Delete</button>
      </div>
    </div>
  </div>

    </div>
  )
}

export default ProductItem
