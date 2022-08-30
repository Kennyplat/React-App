import React, {Suspense, lazy} from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
// style
import { GlobalStyle } from './GlobalStyle';

import Header from './components/Header';

//import logo from './logo.svg';
//import Plat from "./Plat";
//import './App.css';
   // <div>
    //   <Header/>
    //   start here.

    //   <GlobalStyle />
    // </div>

const HomePage = lazy(() => import("./pages/Home"));
const AboutPage = lazy(() => import("./pages/About"));

const Loading = <h1>Loading....</h1>
  

 function App () {
  

    const HomePage = lazy(() => import("./pages/Home"));
  const AboutPage = lazy(() => import("./pages/About"));
  
  const Loading = () => <h1>Loading....</h1>;
  const Error404 = () => <h1>Error404</h1>;
    return(
     <div>
       <Suspense fallback={<Loading />}>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<Error404/>} />
        </Routes> 
        </BrowserRouter>
      </Suspense>
     </div>
    );
 
  
  
   
  
  
  
  
  
  
  
  
  
  //const [gradeComment, setGradeComment]= useState("");


  //Exam scores
  //const handleExamScoreInput = (e) => {

    //let userGrade = parseInt(e.target.value);
    //if(userGrade > 69 && userGrade <= 100){
    //  setGradeComment("Excellent");
    //}else if(userGrade >59 && userGrade <= 69){
      //setGradeComment("very Good")
   // }else if(userGrade > 49 && userGrade <= 59){
      //setGradeComment("Good")
   // }else if(userGrade > 39 && userGrade <= 49){
     // setGradeComment("fair")
   // }else if(userGrade >29 && userGrade <= 39){
    //  setGradeComment("poor")
   // }else if (userGrade > -1 && userGrade < 29){
   // setGradeComment("very poor")

   // }else {
      //setGradeComment("error")
   // }


    
 // }
    
  
  //<Lightswitch
  //name = "one
  //callback = {handleLightSwitchTwo"}
  //switchOn= {isLampOneOn}
  //position : right


 }

 export default App;

