import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import Empty from "./components/Empty";
import Form from "./components/form";



const routs=(
  <BrowserRouter>
  <div>
   
    <button>
      <Link to= "/">App</Link>
    </button>
    <button>
      <Link to= "/home">Home</Link>
    </button>
    <button>
      <Link to= "/contact/:id">Contact</Link>
    </button>
    <button>
      <Link to= "/aboutus">About US</Link>
    </button>
    <button>
      <Link to= "/form">Form</Link>
    </button>
    <Switch>
      <Route exact path="/" componenet={App} />
      <Route path="/home" component={Home} />
      <Route path="/contact/:id" component={Contact} />
      <Route path="/aboutus" component={AboutUs} />
      <Route path="/form" component={Form} />
      <Route component ={Empty} />
      
    </Switch>

  </div>
  </BrowserRouter>
)

ReactDOM.render(
routs,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
