import React from 'react'
import Bride from '../assets/images/bride.jpg'
import Groom from '../assets/images/groom.jpg'
function Bridegroom () {
  return (
    <div id='couple' className='bridegroom clear section-padding bg-pink'>
      <div className='container'>
        <div className='row mb-60'>
          <div className='col-md-6 '>
            <div
              className='item toright mb-30 animate-box'
              data-animate-effect='fadeInLeft'
            >
              {/* <div className='img'>
                {' '}
                <img src={Bride} alt='' />{' '}
              </div> */}
              <div className='info valign'>
                <div className='full-width'>
                  <h6>
                    Dato Seri Rosli Bin Jaafar <i className='ti-heart'></i>
                  </h6>{' '}
                  <span>The Groom's Father</span>
                  <p>
                  Terima kasih atas kesudian Dato' Seri, Datin Seri, Dato', Datin, Tuan, Puan menyerikan lagi majlis resepsi putera kami Rahimie dan Syafiqah.
                  </p>
    
                  
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div
              className='item mb-30 animate-box'
              data-animate-effect='fadeInRight'
            >
              {/* <div className='img'>
                {' '}
                <img src={Groom} alt='' />{' '}
              </div> */}
              <div className='info valign'>
                <div className='full-width'>
                  <h6>
                    Datin Seri Asliza Binti Abd Jalil<i className='ti-heart'></i>
                  </h6>{' '}
                  <span>The Groom's Mother</span>
                  <p>
                  Terima kasih atas kesudian Dato' Seri, Datin Seri, Dato', Datin, Tuan, Puan menyerikan lagi majlis resepsi putera kami Rahimie dan Syafiqah.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div
            className='col-md-12 text-center animate-box'
            data-animate-effect='fadeInUp'
          >
            <h3 className='oliven-couple-title'>Thank You</h3>
            <h2 className='oliven-title'>You are coming to our special day!</h2>
            <h4 className='oliven-couple-subtitle'>
              June 10, 2023 — The Light Hotel,Penang
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bridegroom
