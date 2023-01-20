

/*
 * ----------------------------------------------------------------------
 *                          Components & Functions                      |
 * ----------------------------------------------------------------------
 */

import {React,useState} from 'react'
import { Grid,Card,CardContent,CardMedia,Typography,CardActions,Button } from '@mui/material'
import {DefaultPlayer as Video} from 'react-html5video'
import 'react-html5video/dist/styles.css'  
import { useNavigate,Link } from 'react-router-dom'
/*
* ----------------------------------------------------------------------
*                              Services & Models                       |
* ----------------------------------------------------------------------
*/

import {GetCoursesByFormateur} from './../../Services'

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
  const navigate = useNavigate()

  /* --------------------------------------------------------------------
   *                             Functions                              |
   * --------------------------------------------------------------------
   */

    const handleClick = (id)=>{
        navigate(`/FormateurSpace/Courses/${id}`)
    }
  
  /* --------------------------------------------------------------------
   *                            Effect Hooks                            |
   * --------------------------------------------------------------------
   */

    useEffect(()=>{
        const fetchCourses = async()=>{
            const response=await GetCoursesByFormateur()
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
                        <Card sx={{ height:'fit-content',width: 'fit-content',maxWidth:'300px' }}>
                            <Video 
                                style={{width:'100%'}}
                                autoPlay={model}
                                controls={['PlayPause','Seek','Time','Volume','Fullscreen']}
                            >
                                <source src={course.short_video} type="video/mp4"/>
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
                                <Button size="small" onClick={()=>{handleClick(course.id)}}>More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                )
            })
        }
        {(courses.length === 0)&&(
            <Grid container flexDirection='column' alignItems='center'>
                <Grid>
                    <Typography variant='h3'>
                        You have No Courses 
                    </Typography>
                </Grid>
                <Grid>
                    <Link to='/FormateurSpace/AddCourse'>
                        Add courses ?
                    </Link>
                </Grid>
                
            </Grid>
            
        )
        }
        
    </Grid>
  )
}

export default SectionCoursesFormateur