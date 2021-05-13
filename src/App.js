import React from 'react';
import "./App.css";
import Menu from './components/Menu';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Signin from './components/Signin';



function App() {
  return (
    <BrowserRouter>
      <>
        <Menu />
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/signup' component={Signup} />
          <Route path='/signin' component={Signin} />
          <Route exact path='/' component={Home} />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default App;
