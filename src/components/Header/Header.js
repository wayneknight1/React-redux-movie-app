import React from 'react'
import { Link } from 'react-router-dom'
import UserImage from '../../images/user.png'
import './Header.scss'
function Header() {
  return (
    <div className='header'>
        <Link to='/'>
        <div className='logo'>Movie App</div>
        </Link>
         <div  className='user-image'>
            <img src={UserImage} alt = 'user'/>
        </div>
        
    </div>
  )
}

export default Header