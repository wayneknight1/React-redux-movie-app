import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import movieApi from '../../common/apis/movieApi'
import { APIKey } from '../../common/apis/MovieApiKey'
import { useDispatch } from 'react-redux'
import { addMovies } from '../../features/movies/movieSlice'
function Home() {
    const dispatch = useDispatch()
    useEffect(() => {
        console.log('Inside the useEffect in home component the api key is ',APIKey)
        const movieText = 'Harry';
        const fetchMovies = async () => {
            const response = await movieApi.get(`?apikey=${APIKey}&s=${movieText}&type=movie`)
            .catch(err => {
                console.log('Err: ',err)
            })
            console.log('response from api is ',response)
            dispatch(addMovies(response.data))
        }
        fetchMovies()
    },[]) 
  return (
    <div>
        <div className='banner-img'></div>
        <MovieListing/>
    </div>
  )
}

export default Home