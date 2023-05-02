import React from 'react'
import './Error.css'
import Badway from './warning.gif'

const Error = () => {
  
  return (
    <div>

    <h1 className='err1'>Error 404 </h1>
    <h4 className='err2'>The page you requested could not be found</h4>
    <h4 className='err2'>If you typed the URL directly, make sure the spelling is correct.</h4>
    <div >
    <img src={Badway} className='errorIcon' alt='Error'/>

    </div>
    </div>

    
  )
}

export default Error