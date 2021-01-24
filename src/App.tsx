import React from 'react';
import {Header, Navbar, Profile, Dialogs, Users} from './components';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header/>
        <Navbar/>
        <section className="content">
          <Route
            path="/users"
            render={
              () => <UsersContainer/>
            }
          />
          <Route
            path="/dialogs/:dialogId?"
            render={
              () => <Dialogs/>
            }
          />
          <Route
            exact
            path="/"
            render={
              () => <Profile/>
            }
          />
        </section>
      </div>
    </BrowserRouter>
  )
}

export default App
