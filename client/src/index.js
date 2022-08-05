import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before, 
  *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
  }

  body {
    font-family: BlinkMacSystemFont,-apple-system,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
  }

  .logo-small img{
    justify-content: center;
    width: 100%;
    
    background-size: contain; 
}
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 40px auto;
    padding: 16px;
    width: 100%;
    justify-content: center;
}
  .user-container {
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    padding: auto;
    justify-content: center;
}
.user-button {
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    padding: auto;
    justify-content: center;
}
 

.card-title {
  text-align: center;
  font-size: 20px;
 font-weight: 800;
}


.card-img{
  width: 80%;
  height: 100%;
  border-radius: 20%;
}

.card-text {
  margin-bottom: 3rem;

}

.input{
  padding: 1rem;
  max-width: 400px;
  height: auto;
  margin: auto;
  
}
.input-text{
  padding: 1rem;
  max-width: 400px;
  height: auto;
  margin: auto;
  
}

`;

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
