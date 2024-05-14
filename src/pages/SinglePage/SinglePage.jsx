import React from 'react';
import "./SinglePage.scss";
import Slider from '../../components/Slider/Slider';
import { singlePostData, userData } from "../../lib/dummyData.js";
import Map from '../../components/Map/Map.jsx';


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
        <div className='wrapper'>
          <p className='title'>General</p>
          <div className='listVerticle'>
            <div className='feature'>
              <img src='/utility.png' alt=''></img>
              <div className='featureText'>
                <span>Utilities</span>
                <p>Renter is Responsible</p>
              </div>
            </div>
            <div className='feature'>
              <img src='/pet.png' alt=''></img>
              <div className='featureText'>
                <span>Pet Policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>
            <div className='feature'>
              <img src='/fee.png' alt=''></img>
              <div className='featureText'>
                <span>Property Fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
          <p className='title'>Sizes</p>
          <div className='sizes'>
            <div className='size'>
              <img src='/size.png' alt=''></img>
              <span>80 sqft</span>
            </div>
            <div className='size'>
              <img src='/bed.png' alt=''></img>
              <span>2 beds</span>
            </div>
            <div className='size'>
              <img src='/bath.png' alt=''></img>
              <span>1 bathroom</span>
            </div>
          </div>
          <p className='title'>Nearby Places</p>
          <div className='listHorizontal'>
            <div className='feature'>
              <img src='/school.png' alt=''></img>
              <div className='featureText'>
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className='feature'>
              <img src='/bus.png' alt=''></img>
              <div className='featureText'>
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className='feature'>
              <img src='/restaurant.png' alt=''></img>
              <div className='featureText'>
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>
          </div>
          <p className='title'>Location</p>
          <div className='mapContainer'>
            <Map items={[singlePostData]} />
          </div>
          <div className='buttons'>
            <button>
              <img src='/chat.png' alt=''></img>
              Send a Message
            </button>
            <button>
              <img src='/save.png' alt=''></img>
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePage
