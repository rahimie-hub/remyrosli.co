import React, { useEffect } from 'react'
// import "./InputSelectSearch.css";
import SelectSearch from 'react-select-search';
import Select from 'react-select';
import { renameKeys } from '../Functions/renameKeys';
import { useRef } from "react";

const InputSelectSearch = props => {
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

    // const searchInput = useRef();
    // const handleFilter = (items) => {
    //     return (searchValue) => {
    //       if (searchValue.length === 0) {
    //         return renamedList;
    //       }
    //       const updatedItems = items.map((list) => {
    //         const newItems = list.items.filter((item) => {
    //           return item.name.toLowerCase().includes(searchValue.toLowerCase());
    //         });
    //         return { ...list, items: newItems };
    //       });
    //       return updatedItems;
    //     };
    //   };

    return (
        // <SelectSearch
        //     {...props}
        //     styles={{ menuPortal: base => ({ ...base, zIndex: 99999 }) }}
        //     menuPortalTarget={document.body}

        //     value={renamedList.find(item => item.value === props.value)}
        //     options={renamedList}

        //     formatOptionLabel={option => formatOptionLabel(option)}
        //     onChange={(selected) => onChange(selected)}
        //     onBlur={(selected) => onBlur(selected)}

        //     // ref={searchInput}
        //     // filterOptions={handleFilter}
        //     search
            
        // />
        <Select 
        {...props}
            styles={{ menuPortal: base => ({ ...base, zIndex: 99999 }) }}
            menuPortalTarget={document.body}

            value={renamedList.find(item => item.value === props.value)}
            options={renamedList}

            formatOptionLabel={option => formatOptionLabel(option)}
            onChange={(selected) => onChange(selected)}
            onBlur={(selected) => onBlur(selected)} 
 
        />
    )
}

export default InputSelectSearch;