import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import './Buttons.scss'

const AddButton = props => {
    useEffect(() => { }, []);

    return (
        <Button
            variant="secondary"
            onClick={props.clicked}
        >
            {props.children}
        </Button>
    )
}

export default AddButton;