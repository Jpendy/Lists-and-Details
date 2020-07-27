import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import HomePage from '../../containers/homePage/HomePage';
import DetailPage from '../detailPage/DetailPage';


export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/:name' component={DetailPage} />
      
      </Switch>

    </Router>
  );
}
  
