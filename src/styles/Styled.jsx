import React from 'react';
import styled from 'styled-components';
import { Button } from '@chakra-ui/react';


export const Contenedor = styled.html`
    font-size:10px;
    transition: background-color 2s ;
    min-height: 100vh;
    display: flex; 
    justify-content: center; 
    align-items: center;
`

export const H1Styled = styled.h1`
       text-align: right;
       font-size: 40px;
       text-align:center;
`
export const CajaContenedora = styled.div`
    background-color:white;
    transition: color 2s ;
    transition: background-color 2s ;
    font-family:'Pattaya';
    width:50%;
    margin: 40px 80px 40px 80px;
    padding: 30px 50px 30px 50px ;
    border-radius: 5px;
    @media only screen and (min-width: 992px) {
        width:75%;  
    }

`
export const H2Styled = styled.h2`
      text-align: right;
      font-size: 20px;
`

export const ButtonQuote = styled(Button) `
       border-radius: 10px;
       font-size: 10px;
       color:White;
       transition: background-color 2s ;
       box-shadow: none;
       margin-left: 90%;
       margin-top:5%;
`
export const ButtonQuotee = styled.a `
       border-radius: 10px;
       font-size: 10px;
       color:white;
       transition: background-color 2s ;
       box-shadow: none;
       margin-top:5%;
       text-align: left;
`

export const ImagenTwitter = styled.img `
        width:20px;
        height:20px;
`





