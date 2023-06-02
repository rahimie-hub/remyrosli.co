import React, { useEffect } from 'react'

import { Form } from 'react-bootstrap';
import InputSelect from './InputSelect';
import InputDatepicker from './InputDatepicker';
import InputTimepicker from './InputTimepicker';
import InputSelectSearch from './InputSelectSearch';
import moment from 'moment';
import { InputNumberCommas } from 'react-number-format-with-commas';

import './Input.scss';

var classNames = require('classnames');
const $ = require("jquery");

// export const numberWithCommas = (value) => {
//     // console.log(value)
//     var newValue_before = isNaN(Number(value).toFixed(2)) ? value : Number(value).toFixed(2);
//     var newValue = newValue_before?newValue_before.replace(/\B(?=(\d{3})+(?!\d))/g, ',') :Number.parseFloat(0).toFixed(2);   
//     return newValue;
//     // alert(value.replace(/\B(?=(\d{3})+(?!\d))/g, ','));
// }
const InputForm = props => {
    useEffect(() => { }, []);

    let element = null;
    const onChange = (name, value) => {
        if (props.inputuppercase)
            props.onChange(name, value.toUpperCase());
        else
            props.onChange(name, value);
    }

    const onBlur = (name) => {
        if (props.onBlur)
            props.onBlur(name, true);
    }

    // custom Function for auto add commas and fixed to 2 decimal points
    const onBlur_custom = (name, value) => {
        if (props.onBlur)            
            var newValue_before = isNaN(Number(value).toFixed(2)) ? value : Number(value).toFixed(2);
            var newValue = newValue_before?newValue_before.replace(/\B(?=(\d{3})+(?!\d))/g, ',') :Number.parseFloat(0).toFixed(2);   
            props.onBlur(name, newValue);
    }

    // $('input.numberWithCommas').keyup(function(event) {

    //     // skip for arrow keys
    //     if(event.which >= 37 && event.which <= 40) return;
      
    //     // format number
    //     $(this).val(function(index, value) {
    //     const newValue =value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    //         // if (!value.includes(".")) {
    //         //     const formatted = new Intl.NumberFormat().format(parseFloat(newValue));
    //         //     // setDisplayVal(formatted);
    //         //     return formatted;
    //         //   } else {
    //         //     // setDisplayVal(value);
    //         //     return newValue;
    //         //   }
    //     return newValue;
    //     //   .replace(/\D/g, "")
    //     //   .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        
    //     //   ;
    //     });
    //   });

    // const onChangeNumberWithCommas= useCallback(
    //     (e) => setValue(e.target.value), // e.target.value is a string sans commas here
    //     [setValue]
    //   );

    switch (props.inputtype) {
        case ('date'):
            element = <Form.Control
                {...props}
                type="date"
                value={props.value.substring(0, 10)}
                onChange={(event) => onChange(props.name, event.target.value)}
                onBlur={() => onBlur(props.name)}
                className={
                    classNames({
                        'text-uppercase': props.inputuppercase
                    })
                }
            />;
            break;
        case ('month'):
                element = <Form.Control
                    {...props}
                    type="month"
                    min={props.min}
                    value={props.value.substring(0, 10)}
                    onChange={(event) => onChange(props.name, event.target.value)}
                    onBlur={() => onBlur(props.name)}
                    className={
                        classNames({
                            'text-uppercase': props.inputuppercase
                        })
                    }
                />;
                break;
        case ('time'):
                element = <Form.Control
                    {...props}
                    type="time"
                    value={props.value.substring(0, 10)}
                    onChange={(event) => onChange(props.name, event.target.value)}
                    onBlur={() => onBlur(props.name)}
                    className={
                        classNames({
                            'text-uppercase': props.inputuppercase
                        })
                    }
                />;
                break;
        case ('text'):
            element = <Form.Control
                {...props}
                type="text"
                onChange={(event) => onChange(props.name, event.target.value)}
                onBlur={() => onBlur(props.name)}
                className={
                    classNames({
                        'text-uppercase': props.inputuppercase
                    })
                }
            />;
            break;
        case ('numberWithCommas'):
                element = <Form.Control
                    {...props}
                    type="text"
                    onChange={(event) => onChange(props.name, event.target.value)}
                    onBlur={(event) => onBlur_custom(props.name, event.target.value)}
                    onKeyPress={(event) => {
                        if (/[^0-9.]|(?<=\..*)\./.test(event.key)) {
                        event.preventDefault();
                        }
                    }}
                    // className="numberWithCommas"
                />;
            break;
        case ('textarea'):
            element = <Form.Control
                {...props}
                as="textarea"
                onChange={(event) => onChange(props.name, event.target.value)}
                onBlur={() => onBlur(props.name)}
                className={
                    classNames({
                        'text-uppercase': props.inputUpperCase
                    })
                }
            />;
            break;
        case ('select'):
            element = <InputSelect
                {...props}
                onChange={(name, selected) => onChange(props.name, selected)}
                onBlur={() => onBlur(props.name)}
                className={
                    classNames({
                        'text-uppercase': props.inputUpperCase
                    })
                }
            />;
            break;
        // case ('selectSearch'):
        //         element = <InputSelectSearch
        //             {...props}
        //             onChange={(name, selected) => onChange(props.name, selected)}
        //             onBlur={() => onBlur(props.name)}
        //             className={
        //                 classNames({
        //                     'text-uppercase': props.inputUpperCase
        //                 })
        //             }
        //         />;
        //         break;
        case ('datepicker'):
            element = <InputDatepicker
                {...props}
                onChange={(name, selected) => onChange(props.name, selected)}
                onBlur={() => onBlur(props.name)}
                className={
                    classNames({
                        'text-uppercase': props.inputUpperCase
                    })
                }
            />;
            break;
        case ('timepicker'):
            element = <InputTimepicker
                {...props}
                onChange={(name, selected) => onChange(props.name, selected)}
                onBlur={() => onBlur(props.name)}
                className={
                    classNames({
                        'text-uppercase': props.inputUpperCase
                    })
                }
            />;
            break;
        default:
            element = <Form.Control
                {...props}
                type={props.inputtype}
                onChange={(event) => onChange(props.name, event.target.value)}
                onBlur={() => onBlur(props.name)}
                className={
                    classNames({
                        'text-uppercase': props.inputUpperCase
                    })
                }
            />;
    }

    return (element);
}

export default InputForm;