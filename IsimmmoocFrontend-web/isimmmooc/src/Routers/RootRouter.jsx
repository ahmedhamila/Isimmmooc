

/*
 * ----------------------------------------------------------------------
 *                          Components & Functions                      |
 * ----------------------------------------------------------------------
 */
import React from 'react'
import { Fragment } from 'react';
import {BrowserRouter} from 'react-router-dom'
import VisitorRouter from "./VisitorRouter.jsx";
import FormateurRouter from './FormateurRouter.jsx';
import ApprenantRouter from './ApprenantRouter.jsx';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { useSelector,useDispatch } from 'react-redux';
import { updateCredentials } from './../Redux/UserSlice'
import { useGetUserCredentialsQuery } from '../Redux/UserApiSlice.js';
/*
* ----------------------------------------------------------------------
*                              Services & Models                       |
* ----------------------------------------------------------------------
*/



/*
 * ----------------------------------------------------------------------
 *                                Styles                                |
 * ----------------------------------------------------------------------
 */


/*
 * ----------------------------------------------------------------------
 *                                Images                                |
 * ----------------------------------------------------------------------
 */

function RootRouter() {

  /* --------------------------------------------------------------------
   *                           Constants                                |
   * --------------------------------------------------------------------
   */

  /* --------------------------------------------------------------------
   *                               Props                                |
   * --------------------------------------------------------------------
   */
  const dispatch =useDispatch()

  /*--------------------------------------------------------------------
  *                                 Data                               |
  * --------------------------------------------------------------------
  */
  const {data ,error,isLoading,isSuccess} = useGetUserCredentialsQuery({Token:localStorage.getItem('Token')})
  if(data)
  {
    console.log("////")
    dispatch(updateCredentials(data))
  }
  /* --------------------------------------------------------------------
   *                              States                                |
   * --------------------------------------------------------------------
   */

  const {userType} = useSelector((state)=>state.user)
  
  const token = localStorage.getItem('Token')

  console.log(userType)
  console.log(token)

  /* --------------------------------------------------------------------
   *                             Functions                              |
   * --------------------------------------------------------------------
   */

    
  
  /* --------------------------------------------------------------------
   *                            Effect Hooks                            |
   * --------------------------------------------------------------------
   */

  /* --------------------------------------------------------------------
   *                                 JSX                                |
   * --------------------------------------------------------------------
   */

  return (
    
    <BrowserRouter>
      {isLoading ?
      (
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
          <LinearProgress />
          <LinearProgress />
        </Box>
      )
    :(
      data?(
          (token )&&(
            <Fragment >
              {(userType === "PreFormateur" || userType === "Formateur") &&  <FormateurRouter />}
              {(userType === "Apprenant") &&  <ApprenantRouter />}
             
              
            </Fragment>
          )
        ):(
          <Fragment >
            <VisitorRouter />
          </Fragment>
        )
      
    )
      
    }
    
      
        
        
    </BrowserRouter>
  )
}

export default RootRouter