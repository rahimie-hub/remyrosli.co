import React, { useState } from 'react';
// import Modal from 'react-modal';
// import AnimatedText from 'react-animated-text-content';
import { Container, Row, ButtonToolbar, Col, Form } from 'react-bootstrap';
// import { Transition } from 'react-transition-group';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Dialog } from 'primereact/dialog';

const WelcomeModal = ({ handlePlay }) => {
  const [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
    handlePlay();
  }
  const styles = {
    position: 'absolute',
    bottom: '50%',
    margin: 'auto',
  };

  return (
    <Dialog visible={isOpen} onHide={null} header=""
      width='5vw'
      baseZIndex="10000"
      style={{}}
      // onHide={props.close}
      footer={null}
      maskClassName={null}
      closable={false}

      maximizable modal 

    >
      <Container>
        <Row className='justify-content-center'>
          <div style={{ textAlign: 'center' }}>
            <div>
              <div>
                <div>
                  <h4 >Walimatulurus</h4>		
                </div>
              </div>
              <div>
                <div>
                  <h5 >Rahimie</h5>		</div>
                </div>
              <div>
                <div>
                  <h2>&amp;</h2>		</div>
                </div>
              <div>
                <div>
                  <h5>Syafiqah</h5>		</div>
                </div>
              <div>
                <div>
                </div>
              </div>
            </div>
          </div>
        </Row>
        <Row className='justify-content-center'>
          <button className="button-1" onClick={closeModal}>Open</button>
        </Row>
      </Container>
    </Dialog>
    // {/* <Modal       size="sm"
    //       aria-labelledby="contained-modal-title-vcenter"
    //       centered isOpen={isOpen} onRequestClose={closeModal}  animation={true}>
    //       <Container>
    //         <Row  className='justify-content-center'>
    //           <div>
    //             <AnimatedText
    //               type="words"
    //               animation={{
    //                 x: '200px',
    //                 y: '-20px',
    //                 scale: 1.1,
    //                 ease: 'ease-in-out',
    //               }}
    //               animationType="float"
    //               interval={0.06}
    //               duration={0.8}
    //               tag="p"
    //               className="animated-paragraph "
    //               includeWhiteSpaces
    //               threshold={0.1}
    //               rootMargin="20%"
    //             >
    //               Welcome to our website!
    //               Thank you for visiting. We hope you enjoy your stay
    //             </AnimatedText>;
    //             <div>

    //             <button onClick={closeModal}>Close</button>
    //             </div>
    //           </div>
    //         </Row>
    //       </Container>


    //     </Modal> */}


  );
}

export default WelcomeModal;