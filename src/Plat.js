
import React,  {useState} from 'react';
//import styled from 'styled-components';
import Lamp from "./Lamp";
import Lightswitch from "./Lightswitch";



const Room = styled.div`
position: relative;
width : 500px;
height : 500px;
border : 10px dolid black;
margin : 0 auto;
`;

export default function Plat(){
   // const [count, setCount]=useState(0);
    
    const [isLampOneOn,setIsLampOneOn] = useState(false);
    const [isLampTwoOn, setIsLampTwoOn] = useState(true);
    

    const handleSwitchOneOn = () => setIsLampOneOn (prev  =>! prev);
    const handleLightSwitchTwo = () => setIsLampTwoOn (prev  =>! prev);


   // const handleExamScoreInput = (e) =>{
       // let userGrade = parseInt(e.target.value);
       // if(userGrade >69 && userGrade <= 100){
         //   gradeComment("Excellent")
       // }else if
   // }

    return (
            <Room>
             <Lamp lampon={isLampOneOn} position= "left"/> 
             <Lamp lampon={isLampOneOn} position= "right"/>  
            
            <Lightswitch
            name = 'one'
            callback = {handleLightSwitchTwo}
            switchOn= {isLampOneOn}
            position = 'left'
            />
            <Lightswitch
            name = 'two'
            callback = {handleLightSwitchTwo}
            switchOn= {isLampTwoOn}
            position = 'right'
            />
            </Room>
        );












   // const handleCount = () => {
       // count < 7 && setCount(count +1);


       // if(count < 10) {
         //   (count + 1);  
        //} else 
   // }

    
    



    //return( 
        //<div>

           // <Room>


          //  </Room>
          //  <h1>you are great{props.name}</h1>
           // {count}
           // <button onClick={handleCount}>click</button>
       // </div>
        
        
        
    //)


}
