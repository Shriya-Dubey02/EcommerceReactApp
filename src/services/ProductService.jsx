// Logic 
// for exporting multiple functions write export at the start

const API_LINK="http://localhost:8080/products"
export const getProducts=()=>{
    return fetch(API_LINK).then(data=>data.json())
    .then(data=>data["_embedded"]["products"])

}

export const addProduct=(product)=>{

    return fetch(API_LINK,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(product)
    }).then(data=>data.json())
    .then(data=>data)
}

export const getProductsById=(id_link)=>{
    return fetch(id_link)
    .then(data=>data.json())
    .then(data=>data)


}

export const updateProduct=(product_id_link,product)=>{

    return fetch(product_id_link,{
        method:"PUT", 
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(product)
    
    }).then(data=>data.json()).then(data=>data)

}

export const deleteProduct=(product_id_link)=>{
    return fetch(product_id_link,{ method:"DELETE" })
    .then(data=>data.json())
    .then(data=>data)

}

export const getProductsLowToHigh=()=>{
    return fetch("http://localhost:8080/products/search/findByOrderByProductPriceAsc")
    .then(data=>data.json())
    .then(data=>data["_embedded"]["products"])

}

export const getProductsHighToLow=()=>{
    return fetch("http://localhost:8080/products/search/findByOrderByProductPriceDesc")
    .then(data=>data.json())
    .then(data=>data["_embedded"]["products"])

}

export const orderByproductNameAsc=()=>{
    return fetch("http://localhost:8080/products/search/findByOrderByProductNameAsc")
    .then(data=>data.json())
    .then(data=>data["_embedded"]["products"])

}

export const orderByproductNameDesc=()=>{
    return fetch("http://localhost:8080/products/search/findByOrderByProductNameDesc")
    .then(data=>data.json())
    .then(data=>data["_embedded"]["products"])

}

// 25 Jan: Uploading image
export const uploadProductImage=(product_link,file)=>{

    let formData=new FormData();
    formData.append("productImage",file);
    return fetch(product_link+"/image",{
        method:"POST",
        body:formData
    }).then(data=>data.text())
    .then(data=>data)


}