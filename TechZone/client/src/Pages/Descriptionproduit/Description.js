import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useMatch } from 'react-router-dom'
import { getOneProduct } from '../../JS/Actions/product'
import './Description.css'




const Description = () => {
  const dispatch = useDispatch()
  const match = useMatch("description/:id")

  const productToGet = useSelector(state => state.productReducer.productToGet)
  
  useEffect(() => {
    dispatch(getOneProduct(match.params.id))
  })


  return (
    <div className='descriptioncontainer1'>
<h1 className='Produit'>DESCRIPTION </h1>
<div className='descriptioncontainer'>
  <div>

  <p className='productname'>{productToGet.name}</p>
  <img  src={ `/uploads/${productToGet.imageURL}`} width='50%' alt='product'/>

<div className='v17'>
<p className='v18'>price :</p>
<p className='v19'>
{productToGet.prix} DT
</p>
</div>
<div className='v17'>
<p className='v18'>Reference :</p>
<p className='v19'>
{productToGet.reference} 
</p>
</div>
<p className='v18'>Description :</p>
<p className='v19'>
{productToGet.description} 
</p>
</div>
</div>
    </div>
    
  )
}

export default Description