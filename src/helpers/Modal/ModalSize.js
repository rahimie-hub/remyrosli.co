import React, { useEffect } from "react";
import { Modal, Button, Row, Col, Form, Container } from "react-bootstrap";


const ModalSize = (props) => {

  useEffect(() => {
    console.log('[ModalSize.js] useEffect');
    }, []);

  return (
    <Modal
      {...props}
      show={props.show}
      centered="true"
      style={{ opacity: 100 }}
      onHide={props.close}
      animation={true}
      size={props.size}
    >
      <Modal.Header closeButton onClick={props.close}>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid modal-body">
        <Container fluid>
          <Modal.Body className="modal-body">
            {props.children}
          </Modal.Body>
        </Container>
      </Modal.Body>
      {props.disableFooter ?null: (
        <Modal.Footer>
          <Button onClick={props.close}>Close</Button>
        </Modal.Footer>
      )}
    </Modal>
  );
};

export default ModalSize;


