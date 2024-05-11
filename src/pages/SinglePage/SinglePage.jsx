import React from 'react';
import "./SinglePage.scss";
import Slider from '../../components/Slider/Slider';
import { singlePostData, userData } from "../../lib/dummyData.js";

function SinglePage() {
  return (
    <div className='singlePage'>
      <div className='details'>
        <div className='wrapper'>
          <Slider images={singlePostData.images} />
          <div className='info'>
            <div className='top'>
              <div className='post'>
                <h2>{singlePostData.title}</h2>
                <div className='address'>
                  <img src='/pin.png' alt=''></img>
                  <span>{singlePostData.address}</span>
                </div>
                <div className='price'>$ {singlePostData.price}</div>
              </div>
              <div className='user'>
                <img src={userData.img} alt=''></img>
                <span>{userData.name}</span>
              </div>
            </div>
            <div className='bottom'>
              {singlePostData.description}
            </div>
          </div>
        </div>
      </div>
      <div className='features'>
        <div className='wrapper'></div>
      </div>
    </div>
  )
}

export default SinglePage
