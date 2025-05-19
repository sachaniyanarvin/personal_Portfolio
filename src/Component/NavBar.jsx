import React from 'react'
import '../Styles/NavBar.css'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import {themeAction } from '../store/theme-slice'
import ProfileImage from './ProfileImage';
import Buttons from './Buttons';

function NavBar(props) {
    const isDark = useSelector((state) => state.theme.isDarkMode)
    const dispatch = useDispatch();

const toggleTheme =()=>{
    dispatch(themeAction.toggleDarkMode());
};

const hideMenu =()=>{
    props.toggleMenu();
};

    return (
        <div className='nav'>
            <div className='menu-close' onClick={hideMenu}>
             <Buttons text={<div className='menu-close-icon-mob'></div>} width='7vw' height='7vw' />
            </div>
           <ProfileImage/>
            <div className='nav-name '>
                <div className='f3 text-shadow'>Narvin Sachaniya</div>
                <div className='f1'>Full Stack Developer</div>
            </div>
            <div className='nav-options-cont'>
                <div className='div-option' onClick={hideMenu}>
                    <Link to='/'>Home</Link>
                </div>
                <div className='div-option' onClick={hideMenu}>
                    <Link to='/education'>Education</Link>
                </div>
                <div className='div-option' onClick={hideMenu}>
                    <Link to='/certificates'>Certificates</Link>
                </div>
                {/* <div className='div-option' onClick={hideMenu}>
                    <Link to='/experience'> Experience</Link>
                </div> */}
                <div className='div-option' onClick={hideMenu}>
                    <Link to='/projects'>Projects</Link>
                </div>
                <div className='div-option' onClick={hideMenu}>
                    <Link to='/contact'>Contact</Link>
                </div>
                {/* <div className='div-option' style={{ color: isDark ? 'red' : 'green' }} onClick={()=>{toggleTheme()}}>
                    Theme
                </div> */}
            </div>
        </div>
    )
}

export default NavBar;