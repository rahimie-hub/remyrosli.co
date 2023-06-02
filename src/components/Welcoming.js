import React from 'react'
import Bride from '../assets/images/bride.jpg'
import Groom from '../assets/images/groom.jpg'
function Welcoming() {
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
                    " Dear Dato' Seri, Datin Seri, Dato', Datin, Tuan, and Puan,
                    Thank you for your kindness and presence in enlivening once again the wedding reception of our son, Rahimie, and Syafiqah. Your attendance has truly added joy to this celebration, and we sincerely appreciate your gracious presence. We are grateful for your love, support, and prayers as you join us in commemorating this special day and blessing our son's marriage. May your prayers and well wishes bring abundant blessings to their journey together.With heartfelt appreciation and prayers "
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
                    "Dear Guests,
                    I want to express our heartfelt gratitude for joining us on this joyous day as we celebrate the wedding of our son. Your presence has filled our hearts with happiness, and we are deeply thankful for your love and support. Your warm wishes and kind presence have made this day even more special, and we are truly blessed to have you in our lives. Thank you for being a part of this beautiful journey with us.
                    With heartfelt appreciation"
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
            <h2 className='oliven-title'>You are coming to our special day event!</h2>
            <h4 className='oliven-couple-subtitle'>
              June 10, 2023 — The Light Hotel,Penang
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcoming
