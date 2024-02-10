import React from 'react'
import "../Style/Galery.css"
import anillo1 from "../Assets/images/anillo1.jpg"
import anillo2 from "../Assets/images/anillo2.jpg"
import anillo3 from "../Assets/images/anillo3.jpg"
import anillo4 from "../Assets/images/anillo4.jpg"
import anillo5 from "../Assets/images/anillo5.jpg"
export const Galery = () => {
  return (
    <div className='galeryDiv'>
        <img src={anillo2} className='imgG'/>
        <img src={anillo3} className='imgG'/>
        <img src={anillo1} className='bigF'/>
        <img src={anillo4} className='imgG'/>
        <img src={anillo5} className='imgG'/>
       
    </div>
  )
}
