import React from 'react';
import './App.css';
import { Switch, Route, NavLink } from 'react-router-dom'
import PlacesListContainer from './components/PlacesList/PlacesListContainer';
import AddPlace from './components/AddPlace/AddPlace';
import FirstPage from './components/FirstPage/FirstPage';

function App() {

  return (
    <div className="App">
      <div className="header-wrapper">
        <header className="header">
          <NavLink to="/FilonenkoAleksanrd.io" exact={true} activeClassName="header-item__active" className="header-item">"Главная"</NavLink>
          <NavLink to="/park" exact={true} activeClassName="header-item__active" className="header-item">Парки</NavLink>
          <NavLink to="/nature" exact={true} activeClassName="header-item__active" className="header-item">Природа</NavLink>
          <NavLink to="/arcitecture" exact={true} activeClassName="header-item__active" className="header-item">Архитектура</NavLink>
          <NavLink to="/art" exact={true} activeClassName="header-item__active" className="header-item">Искуство</NavLink>
          <NavLink to="/addNew" exact={true} activeClassName="header-item__active" className="header-item header-item__add">Добавить место</NavLink>
        </header>
      </div>
      <Switch>
        <Route path="/FilonenkoAleksanrd.io" component={() => {return <FirstPage />}} className="header-item" />
        <Route path="/park" component={() => {return <PlacesListContainer placeType='park' />}} className="header-item" />
        <Route path="/nature" component={() => {return <PlacesListContainer placeType='nature' />}} className="header-item" />
        <Route path="/arcitecture" component={() => {return <PlacesListContainer placeType='arcitecture' />}} className="header-item" />
        <Route path="/art" component={() => {return <PlacesListContainer placeType='art' />}} className="header-item" />
        <Route path="/addNew" component={() => {return <AddPlace />}} className="header-item" />
      </Switch>
    </div>
  );
}

export default App;
