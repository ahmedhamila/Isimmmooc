

/*
 * ----------------------------------------------------------------------
 *                          Components & Functions                      |
 * ----------------------------------------------------------------------
 */

import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

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
import './CoursQuiz.scss'

/*
 * ----------------------------------------------------------------------
 *                                Images                                |
 * ----------------------------------------------------------------------
 */

function CoursQuiz() {

  /* --------------------------------------------------------------------
   *                           Constants                                |
   * --------------------------------------------------------------------
   */
    const quiz=[
        {
            header:'Question 1',   
            question:'Quel type erreur voit-on dans le terminal si on supprime le paramètre request de la définition de la vue hello, et qu on essaie de charger cette page dans le navigateur ?',
        }
    ]
    
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
    <div className='quiz-container'>
      {quiz.map(item =>{
        return(
            <div>
                <div className='header-container'>
                <h2>{item.header}</h2>
                </div>
                <div className='question-container'>
                <p>
                  {item.question}
                </p>
                </div>
            </div> 
        )})}  
      <div>
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
            >
                <FormControlLabel value="response1" control={<Radio />} label="response1" />
                <FormControlLabel value="response2"control={<Radio />} label="response2" />
            </RadioGroup>
        </FormControl>
      </div>      
    </div>
    
  )
}

export default CoursQuiz