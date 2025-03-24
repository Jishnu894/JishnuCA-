import React from 'react'

 const Addcard = ({image, description, price}) => {
  return (
   <div>
    <img src={image} alt="product image"/>
    <p>{description}</p>
    <p>Price: ${price}</p>
   </div>
  )
}

export default Addcard