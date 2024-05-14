import React from 'react';
import "./List.scss";
import {listData} from "../../lib/dummyData.js";
import Card from "../Card/Card.jsx";

export default function List() {
  return (
    <div className='list'>
      {
          listData.map(item=>(
               <Card key={item.id} item={item}/>
          ))
      }
    </div>
  )
}
