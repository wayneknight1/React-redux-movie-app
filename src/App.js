import React from 'react'
import './App.scss'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MovieDetail from './components/MovieDetail/MovieDetail';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className='app'>
        <Router>
            <Header></Header>
            <Routes>
            <Route path='/' Component={Home}/>
            <Route path='/movie/:imdbId' Component={MovieDetail}/>
            <Route Component={PageNotFound}/>
            </Routes>
            <Footer/>
        </Router>
    </div>
  )
}

export default App