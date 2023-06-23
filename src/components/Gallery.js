import React, { useRef } from 'react'
import ReactPlayer from 'react-player';
import gallery1 from '../assets/images/1.jpg'
import gallery2 from '../assets/images/2.jpg'
import gallery3 from '../assets/images/3.jpg'
import gallery4 from '../assets/images/4.jpg'
import gallery5 from '../assets/images/5.jpg'
import gallery6 from '../assets/images/6.jpg'
import { Row } from 'react-bootstrap'
function Gallery () {
  const videoRef = useRef(null);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.src = "https://drive.google.com/file/d/16-IwJJz0Zrg7Yir_wSi-xH5Fa785QojL/preview";
      console.log("play video")
    }
  };
  
  return (
    <div id='gallery' className='section-padding'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-30'>
            <span className='oliven-title-meta'>Gallery</span>
            <h2 className='oliven-title'>Video & Photo</h2>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row gallery-filter mt-3'>
        {/* <div className='col-md-12 gallery-item ceremony'>
            <div className='gallery-box text-center'>
            <button onClick={playVideo}>Play Video</button>
            </div>
          </div> */}
        <div className='col-md-12 gallery-item ceremony'>
            <div className='gallery-box text-center'>
            {/* <button onClick={""}>Play Video</button> */}
              {/* <iframe
                src="https://drive.google.com/file/d/16-IwJJz0Zrg7Yir_wSi-xH5Fa785QojL/preview"
                width="380"
                height="280"
                title="Embedded video"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
                ref={videoRef}
                autoplay
                // muted
              ></iframe> */}
              <iframe src="https://drive.google.com/file/d/16-IwJJz0Zrg7Yir_wSi-xH5Fa785QojL/preview" width="300" height="200" allow="autoplay"></iframe>
            </div>
            {/* <Row className='justify-content-center'>
              <button className="button-1 ml-12 mr-5 mb-5" onClick={""}>Play</button>
            </Row> */}
          </div>

          <div className='col-md-4 gallery-item ceremony'>
            <a href='/' className='img-zoom'>
              <div className='gallery-box'>
                <div className='gallery-img'>
                  {' '}
                  <img
                    src={gallery1}
                    className='img-fluid mx-auto d-block'
                    alt=''
                  />{' '}
                </div>
                <div className='gallery-detail'>
                  <h4 className='mb-0'>Wedding Ceremony</h4>
                </div>
              </div>
            </a>
          </div>
          <div className='col-md-4 gallery-item party'>
            <a href='/' className='img-zoom'>
              <div className='gallery-box'>
                <div className='gallery-img'>
                  {' '}
                  <img
                    src={gallery2}
                    className='img-fluid mx-auto d-block'
                    alt=''
                  />{' '}
                </div>
                <div className='gallery-detail'>
                  <h4 className='mb-0'>Wedding Party</h4>{' '}
                </div>
              </div>
            </a>
          </div>
          <div className='col-md-4 gallery-item ceremony'>
            <a href='/' className='img-zoom'>
              <div className='gallery-box'>
                <div className='gallery-img'>
                  {' '}
                  <img
                    src={gallery3}
                    className='img-fluid mx-auto d-block'
                    alt=''
                  />{' '}
                </div>
                <div className='gallery-detail'>
                  <h4 className='mb-0'>Wedding Ceremony</h4>{' '}
                </div>
              </div>
            </a>
          </div>
          {/* <div className='col-md-4 gallery-item party'>
            <a href='/' className='img-zoom'>
              <div className='gallery-box'>
                <div className='gallery-img'>
                  {' '}
                  <img
                    src={gallery4}
                    className='img-fluid mx-auto d-block'
                    alt=''
                  />{' '}
                  <video
                    src={'https://drive.google.com/file/d/16-IwJJz0Zrg7Yir_wSi-xH5Fa785QojL/preview'}
                    className='video-fluid mx-auto d-block'
                    controls
                  >
                    Your browser does not support the video tag.
                  </video>
                  <iframe
                    src="https://drive.google.com/file/d/16-IwJJz0Zrg7Yir_wSi-xH5Fa785QojL/preview"
                    width="640"
                    height="480"
                    title="Embedded video"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className='gallery-detail'>
                  <h4 className='mb-0'>Wedding Party</h4>{' '}
                </div>
              </div>
            </a>
          </div> */}
   
          {/* <div className='col-md-4 gallery-item party'>
            <a href='/' className='img-zoom'>
              <div className='gallery-box'>
                <div className='gallery-img'>
                  {' '}
                  <img
                    src={gallery6}
                    className='img-fluid mx-auto d-block'
                    alt=''
                  />{' '}
                </div>
                <div className='gallery-detail'>
                  <h4 className='mb-0'>Wedding Party</h4>{' '}
                </div>
              </div>
            </a>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Gallery
