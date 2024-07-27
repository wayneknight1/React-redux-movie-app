import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import movieApi from '../../common/apis/movieApi'
import { APIKey } from '../../common/apis/MovieApiKey'
function Home() {
    useEffect(() => {
        console.log('Inside the useEffect in home component the api key is ',APIKey)
        const movieText = 'Harry';
        const fetchMovies = async () => {
            const response = await movieApi.get(`?apikey=${APIKey}&s=${movieText}&type=movie`)
            .catch(err => {
                console.log('Err: ',err)
            })
            console.log('response from api is ',response)
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