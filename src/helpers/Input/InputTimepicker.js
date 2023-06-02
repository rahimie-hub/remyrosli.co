import React, { useEffect } from 'react'
import { Form } from 'react-bootstrap';
import moment from 'moment';
import DatePicker from "react-datepicker";

const InputTimepicker = props => {
    useEffect(() => { }, []);

    const onChange = selected => {
        props.onChange(props.name, moment(selected).toDate());
    }

    return (
        <Form.Control
            {...props}
            selected={props.value}
            as={DatePicker}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={1}
            timeCaption="Masa"
            dateFormat="h:mm aa"
            onChange={(selected) => onChange(selected)}
        />
    )
}
export default InputTimepicker;