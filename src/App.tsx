import React from 'react';
import {Header, Navbar, Profile, Dialogs, Users} from './components';
import './App.css';
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import state from './redux/store'

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header id={123}/>
        <Navbar/>
        <section className="content">
          <Route path="/users" render={() => <Users />}/>
          <Route path="/dialogs" render={() => <Dialogs />}/>
          <Route exact path="/" render={() => <Profile />}/>
        </section>
      </div>


      <div>


      </div>

    </BrowserRouter>
  );
}

export default App;
