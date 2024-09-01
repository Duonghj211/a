import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.png'
import bell_icon from '../../assets/bell_icon.png'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.png'
import { logout } from '../../firebase'


const Navbar = () => {

  const navRef = useRef();

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if(window.scrollY >=80){
        navRef.current.classList.add('nav-dark')
      }else{
        navRef.current.classList.remove('nav-dark')
      }
    })
  },[])

  return (
    <div ref={navRef} className='navbar'>
        <div className="navbar-left">
            <img src="src/assets/logo.png" alt="" className='logo' />
            <ul>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
                <li>Browse by Languages</li>
            </ul>
        </div>
        <div className="navbar-right">
          <img src="src/assets/search_icon.png" alt="" className='icons' width={20} height={20} color='white' />
          <p>Children</p>
          <img src="src/assets/bell_icon.png" alt="" className='icons'width={20} height={20} />
          <div className="navbar-profile">
            <img src="src/assets/profile_img.png" alt="" className='profile' />
            <img src="src/assets/caret_icon.png" alt=""width={20} height={20} className='caret' />
            <div className="dropdown">
              <p onClick={()=>{logout()}}>Sign Out of Netfix</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar