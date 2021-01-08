import React from 'react';
import {Header, Navbar, Profile, Dialogs, Users} from './components';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import store from "./redux/redux-store";
import {Provider} from "react-redux";

function App() {
  // @ts-ignore
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="wrapper">
          <Header/>
          <Navbar/>
          <section className="content">
            <Route path="/users" render={() => <Users/>}/>
            <Route path="/dialogs/:dialogId?"
                   render={
                     () => <Dialogs
                       dialogsPage={store.getState().dialogsPage}
                     />}
            />
            <Route exact
                   path="/"
                   render={
                     () => <Profile
                       profilePage={store.getState().profilePage}
                     />}
            />
          </section>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App
