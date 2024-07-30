import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import UserImage from '../../images/user.png'
import './Header.scss'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'
function Header() {
  const [term, setTerm] = useState('')
  const dispatch = useDispatch()
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncMovies(term))
    dispatch(fetchAsyncShows(term))
  }
  return (
    <div className='header'>
        <div className='logo'><Link to='/'>Movie App</Link></div>
         <div className='search-bar'>
            <form onSubmit={submitHandler}>
              <input type='text' value={term} placeholder='Search Movies Or Shows' onChange={e => setTerm(e.target.value)}/>
              <button>Submit</button>
            </form>
         </div>
         <div  className='user-image'>
            <img src={UserImage} alt = 'user'/>
        </div>
    </div>
  )
}

export default Header