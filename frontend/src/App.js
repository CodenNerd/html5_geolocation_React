import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyles from './others/Style';
import NavContainer from "./components/navbar";
import Userview from "./components/userview";
import Adminview from "./components/adminview";

function App() {
  return (
    <> 
      <GlobalStyles />
      <BrowserRouter>
        <NavContainer />
        <Switch>
          <Route exact path='/' component={Userview}/>
          <Route exact path='/admin' component={Adminview}/>
        </Switch>
      </BrowserRouter>            
    </>
  )
}

export default App;