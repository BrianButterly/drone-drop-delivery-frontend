import React from 'react';
import "./App.css";
import Menu from './components/Menu';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';



function App() {
  return (
    <BrowserRouter>
      <>
        <Menu />
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/signup' component={Signup} />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default App;
