import React from 'react'
import "./index.css"

function NavBar() {
  return (
 <div className='navbar-main'>
    <div className='container'>
        <div className='row'>
            <div className='col logo'>
                <div className='mcb'>
                <h1 className='m'>M</h1>
                <h1 className='c'>C</h1>
                <h1 className='b'>B</h1>
                </div>
            </div>
            <div className='col links'>
                <ul className='nav-ul'>
                    <li><a className="nav-btn" href="#about">Hakkımda</a></li>
                    <li><a className="nav-btn" href="#experience">Deneyimler</a></li>
                    <li><a className="nav-btn" href="#contact">İletişim</a></li>
                </ul>
            </div>

        </div>

    </div>
 </div>  
  )
}

export default NavBar
