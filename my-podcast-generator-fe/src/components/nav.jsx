import React from 'react'
import './css/nav.css'

const Nav = () => {
  return (
    <div>
        {/* <ul className="nav">
            <li className="nav__item">Home</li>
            <li className="nav__item">text to speech</li>
            <li className="nav__item">audio to text</li>
        </ul> */}
        <span>Help</span>
        <Router >
            <nav>
            <Link className='nav-item' to="/">Home</Link> | 
            <Link className='nav-item' to="/text">Text to Speech</Link> | 
            {/* <Link to="/existing2">Existing Component 2</Link> |  */}
            <Link className='nav-item' to="/generate">Generate Scripts</Link> | 
            <Link className='nav-item' to="/send">Send Scripts</Link> | 
            <Link className='nav-item' to="/podcast">Podcast Interface</Link> | 
            <Link className='nav-item' to="/progress">Step Progress</Link> | 
            <Link className='nav-item' to="/script-tree">Script Tree</Link>
            </nav>
        </Router>
    </div>
  )
}

export default Nav;