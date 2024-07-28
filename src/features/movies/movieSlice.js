import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieApi from '../../common/apis/movieApi'
import { APIKey } from '../../common/apis/MovieApiKey'
import { useDispatch } from 'react-redux'


export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
    const movieText = 'Harry';
    const response = await movieApi.get(`?apikey=${APIKey}&s=${movieText}&type=movie`)
            .catch(err => {
                console.log('Err: ',err)
            })
            console.log('response from api is ',response)
            return response.data
})
export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async () => {
    const seriesText = 'Dragon';
    const response = await movieApi.get(`?apikey=${APIKey}&s=${seriesText}&type=series`)
            .catch(err => {
                console.log('Err: ',err)
            })
            console.log('response from api is ',response)
            return response.data
})

const initialState = {
    movies: {},
    shows: {}
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers:{
        addMovies: (state,{payload}) => {
            state.movies = payload
        }
    },
    extraReducers: builder => { //significatly different. try debugging this if issues raise
        builder
        .addCase(fetchAsyncMovies.pending, state => {
            console.log('pending')
        })
        .addCase(fetchAsyncMovies.fulfilled,(state,action)=>{
            return {...state,movies: action.payload}
        })
        .addCase(fetchAsyncMovies.rejected, (state,action) => {
            console.log('Rejected!')
        })
        .addCase(fetchAsyncShows.fulfilled, (state,action) => {
            return {...state,shows: action.payload}
        })
    }   
})

export const {addMovies} = movieSlice.actions //self note - action creator. 
export const getAllMovies = state => state.movies.movies;
export const getAllShows = state => state.movies.shows;
export default movieSlice.reducer