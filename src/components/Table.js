import React from 'react'
import where1 from '../assets/images/where-1.jpg'
import where2 from '../assets/images/where-2.jpg'
import where3 from '../assets/images/where-3.jpg'
function Where () {
  return (
    <div
      id='tasble'
      className='section-padding bg-img bg-fixed'
    >
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-6 bg-white p-40'>
            <span className='oliven-title-meta text-center'>Table Seating</span>
            <h2 className='oliven-title text-center'>Find Your Seat</h2>
            <br />
            <form method='post' className='row'>
              <div className='col-md-12'>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Name'
                    required
                  />{' '}
                </div>
              </div>
              {/* <div className='col-md-12'>
                <div className='form-group'>
                  <input type='text' className='form-control' placeholder='Email' />{' '}
                </div>
              </div>
              <div className='col-md-12'>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Guests'
                  />{' '}
                </div>
              </div>
              <div className='col-md-12'>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    cols='30'
                    rows='7'
                    className='form-control'
                    placeholder='Message'
                  ></textarea>
                </div>
              </div> */}
              <div className='col-md-12'>
                <div className='form-group'>
                  <input type='submit' className='btn buttono' value='FIND' />{' '}
                </div>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Where
