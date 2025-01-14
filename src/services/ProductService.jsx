// Logic 
// for exporting multiple functions write export at the start

const API_LINK="http://localhost:8080/products"
export const getProducts=()=>{
    return fetch(API_LINK).then(data=>data.json())
    .then(data=>data["_embedded"]["products"])

}