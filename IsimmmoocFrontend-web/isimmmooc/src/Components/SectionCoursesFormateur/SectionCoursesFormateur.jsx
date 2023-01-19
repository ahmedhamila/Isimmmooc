

/*
 * ----------------------------------------------------------------------
 *                          Components & Functions                      |
 * ----------------------------------------------------------------------
 */

import {React,useState} from 'react'
import { Grid,Card,CardContent,CardMedia,Typography,CardActions,Button } from '@mui/material'
import {DefaultPlayer as Video} from 'react-html5video'
import 'react-html5video/dist/styles.css'  
import video from '../../Assets/Videos/Video.mp4';
/*
* ----------------------------------------------------------------------
*                              Services & Models                       |
* ----------------------------------------------------------------------
*/

import {GetCourses} from './../../Services'

/*
 * ----------------------------------------------------------------------
 *                                Styles                                |
 * ----------------------------------------------------------------------
 */
import './../../Assets/Styles/style.module.scss'
import { useEffect } from 'react';

/*
 * ----------------------------------------------------------------------
 *                                Images                                |
 * ----------------------------------------------------------------------
 */

const SectionCoursesFormateur = () => {

  /* --------------------------------------------------------------------
   *                           Constants                                |
   * --------------------------------------------------------------------
   */

  /* --------------------------------------------------------------------
   *                               Props                                |
   * --------------------------------------------------------------------
   */

  /*--------------------------------------------------------------------
  *                                 Data                               |
  * --------------------------------------------------------------------
  */


  /* --------------------------------------------------------------------
   *                             Hooks & States                         |
   * --------------------------------------------------------------------
   */

  const [model,setModel]=useState(false)
  const [courses,setCourses] = useState([])

  /* --------------------------------------------------------------------
   *                             Functions                              |
   * --------------------------------------------------------------------
   */

    
  
  /* --------------------------------------------------------------------
   *                            Effect Hooks                            |
   * --------------------------------------------------------------------
   */

    useEffect(()=>{
        const fetchCourses = async()=>{
            const response=await GetCourses()
            const responsejson = await response.json()
            console.log(responsejson)
            setCourses(responsejson)
        }
        
        fetchCourses()
    },[])

  /* --------------------------------------------------------------------
   *                                 JSX                                |
   * --------------------------------------------------------------------
   */




  return (
    <Grid
        container   
        flexDirection='row'
        alignItems='center'
        justifyContent='center'
        sx={{padding:'50px'}}
        gap='25px'
    >
        {
            courses.map((course)=>{

                return (
                    <Grid
                        item
                    >
                        <Card sx={{ height:300,width: 250 }}>
                            <Video 
                                style={{width:'100%'}}
                                autoPlay={model}
                                controls={['PlayPause','Seek','Time','Volume','Fullscreen']}
                            >
                                <source src={'http://127.0.0.1:8000/'+course.short_video} type="video/mp4"/>
                            </Video>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                {course.name}
                                </Typography>
                                <Typography variant="p" color="text.secondary" >
                                {course.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                )
            })
        }
        
    </Grid>
  )
}

export default SectionCoursesFormateur