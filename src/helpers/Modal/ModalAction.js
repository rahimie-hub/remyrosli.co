import React, { useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap';

import './Modal.scss';

const ModalAction = props => {
    useEffect(() => {
        console.log('[ModalAction.js] useEffect');
    }, []);

    let element = null;

    switch (props.modeltype) {
        case ('success'):
            element =
                <Modal
                    {...props}
                    size="sm"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Status
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Berjaya!</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={props.onHide}>Tutup</Button>
                    </Modal.Footer>
                </Modal>;
            break;
        default:
            element = null;
    }

    return (element);
}

export default ModalAction;






