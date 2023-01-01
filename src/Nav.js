import React, { useEffect, useState } from 'react'
import './Nav.css'
import Banner from './Banner';
import Netflixpic from './logo/nf.png'
import NetfixAvatar from './logo/Netflix-avatar.png'
import { useNavigate, Link, NavLink, navigator } from "react-router-dom";
import HomeScreen from './Screens/HomeScreen';
function Nav() {
    const navigate = useNavigate()
    const [show, handleShow] = useState(false);

    function transitionNavBar() {
        console.log("fger")
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }
    
    useEffect(()=>{
        window.addEventListener("scroll", transitionNavBar);
        return()=> window.removeEventListener("scroll", transitionNavBar);
    }, [])

    return (
        
        <>
        <div className={`nav ${show && "nav__black"}`}>
            <div className='nav__contents'>
                    <img className='nav__logo' src={Netflixpic} alt='NEXTFLIX_LOGO' onClick={() => navigate("/homePage")} />
                    <img className='nav_avatar' src={NetfixAvatar} alt='PROFILE_AVATAR' onClick={() => navigate('profile')} />
            </div>
        </div>

        </>
    )
}

export default Nav