import React from 'react'
import where1 from '../assets/images/where-1.jpg'
import where2 from '../assets/images/where-2.jpg'
import where3 from '../assets/images/where-3.jpg'
function Where() {
  return (
    <div id='story' className='whenwhere section-padding bg-pink'>
      <div className='container'>
        {/* <div className='row'>
          <div className='col-md-12 mb-30'>
            {' '}
            <span className='oliven-title-meta'>Questions</span>
            <h2 className='oliven-title'>When & Where</h2>{' '}
          </div>
        </div> */}
        <div className='row'>
          <div className='col-md-12 mb-30'>
            <span className='oliven-title-meta'>Wedding</span>
            <h2 className='oliven-title'>Information</h2>
          </div>
        </div>
        <div className='row'>
          <div className='item col-12 col-md-3 mb-3'>
            <div className='content'>
              <h5>Venue & Time</h5>
              <p>
                <i className='ti-location-pin'></i>
                The Light Hotel, Penang
              </p>
              <p>
                <i className='ti-location-pin'></i>
                7:40pm – Guest Arrival
              </p>
              <p>
                <i className='ti-location-pin'></i>
                8:15pm – Groom & Bride Arrival
              </p>
              <p>
                <i className='ti-location-pin'></i>
                8:20pm – Doa Ricital
              </p>
              <p>
                <i className='ti-location-pin'></i>
                8:35pm – Dinner
              </p>
              <p>
                <i className='ti-location-pin'></i>
                9:00pm – Cake Cutting
              </p>
              <p>
                <i className='ti-location-pin'></i>
                9:10pm – Free & Easy
              </p>
              <p>
                <i className='ti-location-pin'></i>
                10:30pm – Event End
              </p>
            </div>
          </div>
          <div className='item col-12 col-md-3 mb-3'>
            <div className='content'>
              <h5>IMPORTANT</h5>
              <p>
                <i className='ti-location-pin'></i>
                Para jemputan diharap berada di tempat duduk sebelum jam 8.10 mlm / Please be seated before 8.10pm
              </p>

              {/* <p>
                <i className='ti-time'></i> <span></span>
              </p> */}
            </div>
          </div>
          <div className='item col-12 col-md-3 mb-3'>
            <div className='content'>
              <h5>PARKING</h5>
              <p>
                <i className='ti-location-pin'></i>
                Tempat letak kereta terhad didalam kawasan hotel. Kereta boleh ditempatkan di kawasan luar hotel dan buggy disediakan oleh pihak hotel untuk para jemputan / Parking is limited inside the hotel area. Cars can be parked outside the hotel area and buggy will be provided by the hotel for the guests
              </p>
              {/* <p>
                <i className='ti-time'></i> <span></span>
              </p> */}
            </div>
          </div>

          <div className='item col-12 col-md-3 mb-3'>
            <div className='content'>
              <h5>SEATING</h5>
              <p>
                <i className='ti-location-pin'></i>
                Sila pastikan tuan puan sedia maklum dengan nomber meja yg ditetapkan / Please be seated according to the table number given
              </p>
              {/* <p>
                <i className='ti-time'></i> <span></span>
              </p> */}
            </div>
          </div>


          {/* <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              {' '}
              <img src={where2} alt='' />
            </div>
            <div className='content'>
              <h5>Weddding Party</h5>
              <p>
                <i className='ti-location-pin'></i> Fortune Brooklyn restaurant,
                149 Broadway, Brooklyn, NY, USA
              </p>
              <p>
                <i className='ti-time'></i> <span>14:00pm</span>
              </p>
            </div>
          </div> */}
          {/* <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              {' '}
              <img src={where3} alt='' />
            </div>
            <div className='content'>
              <h5>Accomodations</h5>
              <p>
                <i className='ti-direction-alt'></i> Hotel and distance from
                wedding party restaurant:
              </p>
              <p>
                <i className='ti-direction'></i> The William Vale (7 min)
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Where
