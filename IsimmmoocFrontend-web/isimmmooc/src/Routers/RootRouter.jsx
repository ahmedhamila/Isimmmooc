
import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomeSpace from '../Spaces/HomeSpace/HomeSpace'

function RootRouter() {
  return (
    
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<HomeSpace />}/>
            <Route exact path='/SignUp' element={<div> <h1>Helooooo</h1></div>}/>
            
        </Routes>
    </BrowserRouter>
  )
}

export default RootRouter