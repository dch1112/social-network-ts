import React from 'react';
import {Header, Navbar, Profile, Dialogs, Users} from './components';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import {StoreType} from "./redux/store";

type AppType = {
  store: StoreType
}

function App(props: AppType) {
  // @ts-ignore
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header/>
        <Navbar/>
        <section className="content">
          <Route path="/users" render={() => <Users/>}/>
          <Route path="/dialogs/:dialogId?"
                 render={
                   () => <Dialogs dialogsPage={props.store.getState().dialogsPage}
                                  dispatch={props.store.dispatch.bind(props.store)}/>}/>
          <Route exact
                 path="/"
                 render={
                   () => <Profile profilePage={props.store.getState().profilePage}
                                  dispatch={props.store.dispatch.bind(props.store)}/>}/>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
