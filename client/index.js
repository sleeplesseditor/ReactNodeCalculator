import React from 'react'; 
import ReactDOM from 'react-dom';
import Frame from './components/frame'; 
import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css'; 

ReactDOM.render(
    <Frame />, 
  document.getElementById('app')
);
