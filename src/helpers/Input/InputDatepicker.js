import React, { useEffect } from 'react'

import DatePicker from "react-datepicker";
import { Form } from 'react-bootstrap';
import moment from 'moment';

const InputDatepicker = props => {
    useEffect(() => { }, []);

    const onChange = selected => {
        props.onChange(props.name, moment(selected).format());
    }
    return (
        <Form.Control
            {...props}
            as={DatePicker}
            type="text"
            selected={moment(props.selected).toDate()}
            value={moment(props.value).toDate()}
            onChange={(selected) => onChange(selected)}
        />
    )
}

export default InputDatepicker;