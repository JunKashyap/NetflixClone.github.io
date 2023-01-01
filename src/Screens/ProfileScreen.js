import React from 'react'
import Nav from '../Nav'
import NetfixAvatar from '../logo/Netflix-avatar.png'
import './ProfileScreen.css'
import PlansScreen from './PlansScreen'
import { useNavigate } from 'react-router-dom'
function ProfileScreen() {
    const navigate = useNavigate();
  return (
    <div className='profileScreen'>
        <Nav/> 
        <div className='profileScreen__body'>
            <h1>Edit Profile</h1>
              <div className='profileScreen__info'>
                  <img src={NetfixAvatar} alt = 'Avatar'></img>
                  <div className='profileScreen__details'>
                    <h2>admin@gmail.com</h2>
                    <div className='profileScreen__plans'>
                        <h3>Plans (Current Plan: premium)</h3>
                        <PlansScreen/>
                          <button className='profileScreen__signOut' onClick={()=>navigate('/')}>Sign Out</button>
                    </div>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default ProfileScreen