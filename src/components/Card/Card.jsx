import React from 'react';
import "./Card.scss";
import { Link } from 'react-router-dom';

export default function Card({ item }) {
  return (
    <div className='card'>
      <Link to={`/${item.id}`} className='imageContainer'>
        <img src={item.img} alt=''></img>
      </Link>
      <div className='textContainer'>
        <h2 className='title'>
          <Link to={`/${item.id}`} >{item.title}</Link>
        </h2>
        <p className='address'>
          <img src='/pin.png' alt=''></img>
          <span>{item.address}</span>
        </p>
        <p className='price'>${item.price}</p>
        <div className='bottom'>
          <div className='features'>
            <div className='feature'>
              <img src='/bed.png'></img>
              <soan>{item.bedroom} bedroom</soan>
            </div>
            <div className='feature'>
              <img src='/bath.png'></img>
              <soan>{item.bathroom} bathroom</soan>
            </div>
          </div>
          <div className='icons'>
            <div className='icon'>
              <img src='/save.png' alt=''></img>
            </div>
            <div className='icon'>
              <img src='/chat.png' alt=''></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
