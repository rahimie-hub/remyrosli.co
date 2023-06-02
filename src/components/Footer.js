import React from 'react'
import Logo from '../assets/images/logo.png'
function Footer () {
  return (
    <div className='footer2'>
      <div className='oliven-narrow-content'>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <h2>
              <a href='/'>
                <img src={Logo} alt='' />
                <span>
                  Rahimie Rosli <small>&</small> Syafiqah Said
                </span>
              </a>
            </h2>
            <p className='copyright'>June 10, 2023 – The Light Hotel, Penang</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
