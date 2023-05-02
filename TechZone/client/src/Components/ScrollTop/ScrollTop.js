import React from 'react'
import { useEffect, useState } from 'react'
import scroll from './up-arrow.png'
import './ScrollTop.css'

const ScrollTop = () => {
    const [backToTopButton,SetBackToTopButton] = useState(false)
    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY>125){
                SetBackToTopButton(true)   
            }else{
                SetBackToTopButton(false)   
            }   
        })
    },[])

    const scrolUp =()=> {
        window.scrollTo({
            top : 0 ,
            behavior : "smooth" })
        }

  return (
    <div>
        {backToTopButton&&(
            <img className='scrollbouton' onClick={scrolUp} src={scroll } alt='scroll'/>
        )}


    </div>
  )
}

export default ScrollTop