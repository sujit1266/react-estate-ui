import React from 'react';
import "./Map.scss";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import Pin from '../Pin/Pin';

export default function Map({items}) {
     return (
          <MapContainer center={[24.910438, 84.836120]} zoom={7} scrollWheelZoom={false} className='map'>
               <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
               />
               {
                    items.map(item=>(<Pin item={item} key={item.id}/>))
               }
          </MapContainer>
     )
}
