
import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomeSpace from '../Spaces/HomeSpace/HomeSpace'

function RootRouter() {
  return (
    
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<HomeSpace />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default RootRouter