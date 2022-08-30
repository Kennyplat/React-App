
import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --maxWidth :1280px;
    --white : #EEE;
    --lightGrey : #eee;
    --medGrey : #353535;
    --darkGrey: #1c1c1c;
    --fontSuperBig : 2.5rem;
    --fontBig : 1.5remn;
    --fontMed : 1.2rem;
    --fontSmall : 1rem;


 }

 * {
    box-sizing : border-box;
    font-family : 'Abel' sans-serif;

 }

body {
    margin : 0px
    padding : 0px

    h1{
        font-size : 2rem;
        font-weight : 600px;
        color : var(--white);
    }

    h3 {
        font-size : 1rem;
        font-weight : 600px;

    }

    p {
        font-size : 1rem;
        color : var(--white)

 
    }














`;
    

 
