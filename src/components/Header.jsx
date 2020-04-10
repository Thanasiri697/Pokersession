import React from 'react'
import { Link } from 'react-router-dom';
import './Mystyle.css'


export default function Header() {
  return (
    <div>
      <h1 className="header">
        <Link to="/about">
          <i className="poker"></i> ♠♥♦♣ <span className="poker"> Poker Session</span>
        </Link>
      </h1>
    </div>
  )
}
