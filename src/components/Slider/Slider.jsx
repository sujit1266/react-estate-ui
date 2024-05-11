import React from 'react';
import "./Slider.scss";
import { useState } from 'react';

export default function Slider({ images }) {

  const [imageIndex, setIamgeIndex] = useState(null);
  const changeSlide=(direction)=>{
    if(direction==="left"){
      if(imageIndex===0){
        setIamgeIndex(images.length-1)
      }else{
        setIamgeIndex(imageIndex-1);
      }
    }else if(direction==="right"){
      if(imageIndex===images.length-1){
        setIamgeIndex(0);
      }else{
        setIamgeIndex(imageIndex+1);
      }
    }
  }
  return (
    <div className='slider'>
      {imageIndex != null && (<div className='fullSlider'>
        <div className='arrow' onClick={()=>changeSlide("left")}>
          <img src='/arrow.png' alt=''></img>
        </div>
        <div className='imageContainer'>
          <img src={images[imageIndex]}></img>
        </div>
        <div className='arrow' onClick={()=>changeSlide("right")}>
          <img src='/arrow.png' alt='' className='right'></img>
        </div>
        <div className='close' onClick={()=>setIamgeIndex(null)}>X</div>
      </div>)
      }
      <div className='bigImage'>
        <img src={images[0]} alt='' onClick={()=>{setIamgeIndex(0)}}></img>
      </div>
      <div className='smallImages'>
        {
          images.slice(1).map((image, index) => (
            <img src={image} alt='' key={index} onClick={()=>{setIamgeIndex(index+1)}}></img>
          ))
        }
      </div>
    </div>
  )
}
