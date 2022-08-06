import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import logo from './oner.png';
import './Home.scss';

export default class Home extends Component {
  render() {
    const btn = () => {
      const logo = document.getElementById("logo");
      logo.classList.add("hover");
    }
  
    const btn_out = () => {
      const logo = document.getElementById("logo");
      logo.classList.remove("hover");
    }

    return (
      <div className="App">
      <div className="night">
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        
      </div>
      <header className="App-header">
        <div>
          <div className='avatar avatar-x-large'>
            <img src={logo} className="logo" id="logo" alt="oner" >
            </img>
            <img src="https://i.imgur.com/0aDdQyR.png" alt="Moldura" className="avatar-frame anim-spin"></img>
          </div>
          <div className="all" onMouseOver={btn} onMouseOut={btn_out}>
            <div className="lefter">
              <div className="text">Frontend Development</div>
            </div>
            <div className="left">
              <div className="text">Backend Development</div>
            </div>
            <Link to='skills' className="center">
                <div className="explainer"><span>About Me</span></div>
                  <div className="text">Skills</div>
            </Link>
            <div className="right">
              <div className="text">Contacts</div>
            </div>
            <div className="righter">
              <div className="text">About Me</div>
            </div>
          </div>
        </div>
      </header>
    </div>
    )
  }
}
