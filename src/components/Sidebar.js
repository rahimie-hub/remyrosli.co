import React, { useState } from 'react'
import Logo from '../assets/images/logo.png'
function Sidebar () {
  const [show, setShow] = useState(false);

  const openMenu = (e) => {
    e.preventDefault();
    setShow(!show);
    document.body.classList.toggle('slide');
  }

  return (
    <>
      <a href='/' onClick={openMenu} className={`js-oliven-nav-toggle oliven-nav-toggle${show ? ' active': ''}`}>
        <i></i>
      </a>
      <aside id='oliven-aside'>
        <div className='oliven-logo'>
          <a href='/'>
            <img src={Logo} alt='' />
            <span>
              Rahimie <small>&</small> Syafiqah
            </span>
            <h6>10.06.2023</h6>
          </a>
        </div>
        <nav className='oliven-main-menu'>
          <ul>
            <li>
              <a href='#home'>Home</a>
            </li>
            <li>
              <a href='#couple'>Welcoming</a>
            </li>
            {/* <li>
              <a href='#story'>Information</a>
            </li> */}
            {/* <li>
              <a href='#organization'>Organization</a>
            </li> */}
        
            {/* <li>
              <a href='#whenwhere'>Vanue</a>
            </li> */}
            {/* <li>
              <a href='#table'>Seating</a>
            </li> */}
            <li>
              <a href='#gallery'>Gallery</a>
            </li>
            {/* <li>
              <a href='#gallery'>Photo</a>
            </li> */}
          </ul>
        </nav>
        <div className='footer1'>
          {' '}
          <span className='separator'></span>
          <p>
            Rahimie & Syafiqah Reception
            <br />
            10 June 2023, The Light Hotel Penang
          </p>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
