import React from 'react'
import { Link } from 'react-router-dom';
import './Mystyle.css'

export default function About() {
  return (
    <div>
      <div className="container-about">
        <div className="card">
          <div className="Box1">
              <div className="login">
              <p>username</p>
              <input type="text" className="usename"/>
              <p>Password</p>
              <input type="text" className="password"/>
              <Link to="/">
                <h5 className="button">Login</h5>
              </Link>
              </div>
          </div>
              <div className="Box2">
              <p>Hello</p>
              <p>username</p>
              <input type="text" className="usename"/>
              <p>Email</p>
              <input type="text" className="email"/>
              <p>Password</p>
              <input type="text" className="password"/>
              <Link to="/">
                <h5 className="button">Register</h5>
              </Link>
          </div>         
        </div>
        
       
      </div>
    </div>
  )
}





// <div className="loginbar">
// 
// <div className="poimg">
// <img src="https://singularityhub.com/wp-content/uploads/2019/07/Casino-poker-chips-on-green-felt-background-artificial-intelligence-shutterstock-658269847-1068x601.jpg" alt=""/>
// </div>
// </div>
