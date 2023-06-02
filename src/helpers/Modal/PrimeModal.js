import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
import React, { useEffect } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import "./PrimeModal.scss";
// import { Modal, Button, Row, Col, Form, Container } from "react-bootstrap";

const PrimeModal = (props) => {

    useEffect(() => {
        console.log('[PrimeModal.js] useEffect');
    }, []);

    const renderFooter = (name) => {
        return (
          <div>
            <Button
              label="No"
              onClick={props.onClickFirstBtn}
              className="p-button-secondary"
              autoFocus
            />
            <Button
              label="Yes"
              onClick={props.onClickSecBtn}
              autoFocus
            />
          </div>
        );
    };

      
    return (
        <Dialog
            {...props}
            baseZIndex="1"
            header={props.header}
            visible={props.show}
            style={{ width: props.width }} 
            onHide={props.close}
            footer={props.footer?props.renderFooter:null}
        >
            {props.children}
        </Dialog>
    );
};

export default PrimeModal;


