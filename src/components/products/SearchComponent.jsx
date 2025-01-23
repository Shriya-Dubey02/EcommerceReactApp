import React, { useState } from 'react'
import Navbar from './Navbar'
import Product from './Product'

function SearchComponent() {
    let[searchQuery,setSearchQuery]=useState('');
    const handleSearchQuery=(queryFromNavbar)=>{
        setSearchQuery(queryFromNavbar);
        console.log("New query from Navbar::::",searchQuery);

    }
  return (
    <div>
        {/* Navbar is calling function handleSearchQuery */}
      <Navbar handleSearchQuery={handleSearchQuery}/>
      <Product queryfromNavbar={searchQuery}/>
    </div>
  )
}

export default SearchComponent
