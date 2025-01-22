import React, { useEffect, useState } from 'react'
import { getProducts, getProductsHighToLow, getProductsLowToHigh } from '../../services/ProductService'
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

// To sort data

const sort=async (choice)=>{

  switch(choice)
  {
    case 1:
     setProducts(await getProductsLowToHigh());
     break;


     case 2:
      setProducts(await getProductsHighToLow());
      break;
  }

}





// ================================================






  return (
    <div>

<div className="container">
  <div className="row">
    <div className="col">

    <input type="text" onChange={searchFunction} />
      {/* Product Form: Start */}
      <ProductForm onAddProduct={refreshProducts}  selectedProduct={selectedProduct} 
      setSelectedProduct={setSelectedProduct}/> 
      
      {/* to add product without refreshing */}

      {/* Product Form: End */}

    </div>
    <div className="col">
      {/* Showing number of products */}

      <button type="button" className="btn btn-primary mb-3">
  Number of Products <span className="badge bg-secondary">{products.length}</span>
</button> 

      {/* Showing number of products */}

      {/* Sort start */}

      <ul className="list-group mb-3">
  <li className="list-group-item" onClick={()=>{sort(1)}}>Low to High</li>
  <li className="list-group-item" onClick={()=>{sort(2)}}>High to Low</li>
  <li className="list-group-item" onClick={()=>{sort(3)}}>A-Z</li>
  <li className="list-group-item" onClick={()=>{sort(4)}}>Z-A</li>
</ul>

      {/* Sort end */}


       {/* Displaying Products : Start*/}
       <div className="row row-cols-1 row-cols-md-2 g-4">

      
      
      {products.map((p)=>{

         return(
         <ProductItem 
         productName={p.productName}
         productDescription={p.productDescription}
         productPrice={p.productPrice} // this is coming from the api
         product_link={p._links.self.href}
         onSelectProduct={handleSelectProduct}
         onDeleteProduct={refreshProducts} // to delete product just by clicking without refeshing
      
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
