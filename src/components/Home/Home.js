import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import { APIKey } from '../../common/apis/MovieApiKey'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies } from '../../features/movies/movieSlice'
function Home() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAsyncMovies())
    },[]) 
  return (
    <div>
        <div className='banner-img'></div>
        <MovieListing/>
    </div>
  )
}

export default Home