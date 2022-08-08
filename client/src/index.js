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
    margin: 0, auto;
    padding: auto;
    justify-content: center;
}
 

.card-title {
  text-align: center;
  font-size: 10vw;
 font-weight: 800;
}


.card-img{
  width: 100%;
  height: 100%;
  border-radius: 20%;
}

.card-text {
  margin: 1rem;
  text-align: center;
  font-size: 4vw;
  
}

.activity-img img{
    justify-content: center;
    width: 100%;
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

input[type="checkbox"] {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

.checkbox {
  display: inline-block; 
  height: 50px;
  width: 50px;
  background: #fff;
  border: 2px #ddd solid;
  margin-right: 4px;
}

.checkbox--active {
  border-color: #0085ff;
  background: #0085ff;
}


.link-primary {
  font-family: 'Helvetica Neue',Helvetica;
  cursor: pointer;
  font-size: 1rem;
  width: auto;
  /* max-width: 10rem; */
  height: auto;
  border: 1px solid transparent;
  border-radius: 10px;
  padding: .5rem 1.5rem;
  margin: 2rem;
  text-decoration: none;
  text-align: center;
  background-color: red;
  color: white;
}
.link-secondary {
  font-family: 'Helvetica Neue',Helvetica;
  cursor: pointer;
  font-size: 1rem;
  width: auto;
  /* max-width: 10rem; */
  height: auto;
  border: 1px solid transparent;
  border-radius: 10px;
  padding: .5rem 1.5rem;
  margin: 2rem;
  text-decoration: none;
  text-align: center;
  background-color: blue;
  color: white;
}

.form-field{
  font-size: 1rem;
  padding: 1rem;
}

.form {
  align-items: center;
}

`;

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <GlobalStyle />
    <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
