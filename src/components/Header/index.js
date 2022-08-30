import React from 'react';


import RMDBLogo from '../../images/Landecap-logo2.png';
import  TMDBLogo from '../../images/lizzy.jpg';
 import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles.js';


 
 const Header = () => (

    <Wrapper>
        <Content>
            <LogoImg src={RMDBLogo} alt= 'RMDB-LOGO'/>
            <TMDBLogoImg src= {TMDBLogo} alt = 'TMDB-LOGO'/>
        </Content>
    </Wrapper>


 );


 export default Header;
 