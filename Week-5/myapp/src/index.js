import GreetingElement from './My greetings';
import GreetingElementwithProp from './My GreetingProp';
import AppColor from './AppbackgroundColor'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GreetingElement/>
    <GreetingElementwithProp msg= "Hi its Sunday"/>
    <GreetingElementwithProp msg= "Hi its Monday"/>
    <GreetingElementwithProp msg= "Hi its Tuesday"/>
    <GreetingElementwithProp msg= "Hi its Wednesday"/>
    <GreetingElementwithProp msg= "Hi its Thursday"/>
    <GreetingElementwithProp msg= "Hi its Friday"/>
    <GreetingElementwithProp msg= "Hi its Saturday"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
