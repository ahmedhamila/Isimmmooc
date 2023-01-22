import { SignUpApprenant,SignUpPreFormateur,SignUpPreOrganisme,AuthVerification,Authentification } from "./AuthentificationServices";
import {UpdateFormateur,AddCourse,AddChapitre,AddQuestion,AddAnswer,UpdateCourse,GetCoursesByFormateur} from './FormateurServices'
import {GetCourses,GetCoursById,UpdateApprenant,GetDiscipline,RegisterCourse} from './ApprenantServices'
import {GetCoursesHomePage,GetFormateurs} from './HomePage'

export {
    SignUpApprenant,SignUpPreFormateur,SignUpPreOrganisme,AuthVerification,Authentification,GetCourses,GetDiscipline,RegisterCourse,
    UpdateFormateur,AddCourse,AddChapitre,AddQuestion,AddAnswer,GetCoursesByFormateur,GetCoursById,UpdateApprenant,UpdateCourse,
    GetCoursesHomePage,GetFormateurs
}