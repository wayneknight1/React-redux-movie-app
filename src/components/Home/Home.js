import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'
function Home() {
    const dispatch = useDispatch()
    const movieTitle = 'Magic';
    const seriesTitle = 'Chocolate';
    useEffect(() => {
        dispatch(fetchAsyncMovies(movieTitle))
        dispatch(fetchAsyncShows(seriesTitle))
    },[]) 
  return (
    <div>
        <div className='banner-img'></div>
        <MovieListing/>
    </div>
  )
}

export default Home