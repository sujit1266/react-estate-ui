import React from 'react';
import "./ProfilePage.scss";
import List from "../../components/List/List";
import Chat from '../../components/Chat/Chat';

export default function ProfilePage() {
     return (
          <div className='profilePage'>
               <div className='details'>
                    <div className='wrapper'>
                         <div className='title'>
                              <h1>User Information</h1>
                              <button>Update Profile</button>
                         </div>
                         <div className='info'>
                              <span>Avtar: <img src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt=''></img></span>
                              <span><b>Username: Jhon Doe</b></span>
                              <span><b>E-Mail: jhondoe@gmail.com</b></span>
                         </div>
                         <div className='title'>
                              <h1>My List</h1>
                              <button>Create New Post</button>
                         </div>
                         <List/>
                         <div className='title'>
                              <h1>Save List</h1>
                              {/* <button>Update Profile</button> */}
                         </div>
                         <List/>
                    </div>
               </div>
               <div className='chatComponent'>
                    <div className='wrapper'>
                         <Chat/>
                    </div>
               </div>
          </div>
     )
}
