import React from 'react'
import './PlansScreen.css'
function PlansScreen() {
    const productData = [{ id : 12, name: "Premium", description: "4K HDR" }, {id : 13,  name: "Basic", description: "720p" }, {id : 14, name : "Standard", description : "1080p"} ] 
  return (
    <>
    {productData.map(items=>{
        return(
        <div className='plansScreen__plan'>
        <div className='plansScreen_info'>
            <h5>{items.name}</h5>
            <h6>{items.description}</h6>
        </div>
        <button>Subscribe</button>
    </div>
  )})}
    </>
  )
}

export default PlansScreen