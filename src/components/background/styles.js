import styled from "styled-components"

export const WhiteBackground = styled.div`
    display: block;
    margin: auto;
    padding: 10px;
    width: 48em; 
    height: 100%;
    background-color: rgba(255, 255, 255, 0.672);
    @media screen and (max-width: 912px) {
        margin: 0;
        width: 100%; 
        height: 100%;
     }

     @media screen and (max-width: 414px) { 
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
     }     
`;





