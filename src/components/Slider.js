import React, {useState} from 'react';
import { SliderData } from './SliderData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import './slides.css';

const Slider = (slides) => {

const [current, setCurrent] = useState(0);
const length = slides.length;

const nextslide = () =>{
  setCurrent(current === length-1 ? 0 : current++);
  console.log(current);
}

const prevslide = () =>{
  setCurrent(current === 0 ? length-1 : current--);
  console.log(current);
}

// if(!Array.isArray(slides) || slides.length <= 0){
//   return null;
// }


  return (
    <div className='slides-class'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevslide}/> 
        <FaArrowAltCircleRight className='right-arrow' onclick ={nextslide}/>

        {SliderData.map((Slide , index ) =>{
          
            return (
            <div className={index === current ? 'slide-active' : 'slide'} key = {index}> 
            {index === current && (<img src = {Slide.image} alt ="images" className='image'/>)}
            
            </div>
        );
        })}
    </div>
  )
}

export default Slider