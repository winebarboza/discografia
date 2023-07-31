import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap');
    body {
        margin: 0;
        padding: 20px;
        font-family: 'Roboto', sans-serif;
        background-image: url("/background.png");
        background-repeat: no-repeat;
        background-size: 100% 100vh;  
        overflow-y: hidden;
      }
    header{
        background-color: #fff;
        
      }
    h1,h5{
      color: #575757;
    }
    
    h2 {
        color: black;
      }
    h5{
      font-family: 'Roboto', sans-serif;
      font-weight: 100;
      font-size: medium;
    }

    input{
        border: none;
        box-shadow: none;
        border-radius: 13px;
        padding-left: 2%;
      }
      
      textarea:focus, input:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
    }
      button{
        border:none;
        cursor: pointer;
      }
      button:disabled{
       background-color:  #8da7d7;
     }

     
`;
export default GlobalStyle;