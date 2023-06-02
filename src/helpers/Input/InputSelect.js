import React, { useEffect } from 'react'

import Select from 'react-select';
import { renameKeys } from '../Functions/renameKeys';

const InputSelect = props => {
    useEffect(() => { }, []);

    const keysMap = {
        [props.mapValue]: 'value',
        [props.mapLabel]: 'label'
    };
    let renamedList = [];
    const onChange = selected => {
        props.onChange(props.name, selected.value);
    }

    const onBlur = selected => {
        if (props.onBlur)
            props.onBlur(props.name, true);
    }

    // const getOptionLabel = option => {
    //     if (props.setOptionLabel)
    //         return props.setOptionLabel(option);
    //     else
    //         return `${option.label}`
    // }

    const formatOptionLabel = option => {
        if (props.formatOptionLabel)
            return props.formatOptionLabel(option);
        else
            return option.label
    }

    switch (props.arraytype) {
        case ('string'):
            renamedList = props.options.map((item) => ({ value: item, label: item }));
            break;
        case ('object'):
            renamedList = props.options.map((item) => { return renameKeys(keysMap, item) });
            break;
        default:
            renamedList = props.options.map((item) => { return renameKeys(keysMap, item) });
    }

    return (
        <Select
            {...props}
            styles={{ menuPortal: base => ({ ...base, zIndex: 99999 }) }}
            menuPortalTarget={document.body}
            // defaultValue={{ label: "sila pilih...", value: "sila pilih..." }}
            value={renamedList.find(item => item.value === props.value)}
            options={renamedList}
            // getOptionLabel={option => getOptionLabel(option)}
            formatOptionLabel={option => formatOptionLabel(option)}
            // filterOptions={(selected) => onChange(selected)}
            onChange={(selected) => onChange(selected)}
            onBlur={(selected) => onBlur(selected)}
        />
    )
}

export default InputSelect;