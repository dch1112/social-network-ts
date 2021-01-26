import React from 'react';
import {Header, Navbar, Dialogs} from './components';
import './App.css';
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

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
            path="/profile/:userId?"
            render={
              () => <ProfileContainer/>
            }
          />
          <Route
            exact
            path="/"
          >
            <Redirect to="/profile"/>
          </Route>
        </section>
      </div>
    </BrowserRouter>
  )
}

export default App
