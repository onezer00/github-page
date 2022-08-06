import React from 'react';
import { Routes, useLocation, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import history from './Services/history';
import './Styles/animations.css';

import Home from './container/home/Home';
import Skills from './container/skills/Skills';

export default function SwitchRoutes() {

  const location = useLocation();

  return <TransitionGroup>
    <CSSTransition key={location.key} classNames="fade" timeout={500}>
      <Routes location={location} history={history}>
        <Route path="/" exact element={<Home/>} />
        <Route path="/skills" exact element={<Skills/>} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
}
