import "./HomePage.scss";
import SearchBar from "../../components/searchBar/searchBar";

import React from 'react'

export default function HomePage() {
     return (
          <div className="homePage">
               <div className="textContainer">
                    <div className="wrapper">
                         <h1 className="title">Find Real Estate & Get Your Dream Place </h1>

                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                         <SearchBar/>
                         <div className="boxes">
                              <div className="box">
                                   <h1>16+</h1>
                                   <h3>Years of Experience</h3>
                              </div>
                              <div className="box">
                                   <h1>200</h1>
                                   <h3>Award Gained</h3>
                              </div>
                              <div className="box">
                                   <h1>1200+</h1>
                                   <h3>Property Ready</h3>
                              </div>
                              
                         </div>
                    </div>
               </div>
               <div className="imgContainer">
                    <img src="/bg.png"></img>
               </div>
          </div>
     )
}
