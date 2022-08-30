import React from 'react';
//import styled from 'styled-Components';

//const Wrapper = styled.div`
//position : absolute;
left : ${props => (props.postion === 'left' ? '20px' : '380px')}
top : 20px;
background : ${props => (props.lampOn ? 'orange' : 'lightgrey')}
width : 100px;
height : 100px;
border-radius : 50px;
`;

const Lamp = ({lampOn, position}) => (
    <Wrapper lampOn={lampOn} position={position}>
    
    </Wrapper>
);








export default Lamp;