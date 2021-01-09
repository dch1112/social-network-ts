import React from 'react';
import {Header, Navbar, Profile, Dialogs, Users} from './components';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./redux/redux-store";
import {DialogsPageType, ProfilePageType} from "./types/entities";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header/>
        <Navbar/>
        <section className="content">
          <Route path="/users" render={() => <Users/>}/>
          <Route path="/dialogs/:dialogId?"
                 render={
                   () => <Dialogs/>}
          />
          <Route exact
                 path="/"
                 render={
                   () => <Profile/>}
          />
        </section>
      </div>
    </BrowserRouter>
  )
}

export default App
