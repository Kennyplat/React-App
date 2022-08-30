import React from 'react';
//import styled from 'styled-components';


const Button = styled.button`
position : absolute;
left : ${props => (props.position === 'left' ? '20px' : '380px' )}
bottom : 20px;
background: white;
color : black;
border : 1px solid black;
border-radius : 10px;
height : 50px;
width : 100px;
cursor : pointer;
`;  

const Lightswitch = ({callback, position, switchOn }) =>(
    <Button onClick = {callback} position = {position}>
        {switchOn ? 'on' : 'off'}
    </Button>
);


export default Lightswitch;