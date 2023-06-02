import React, { useContext } from 'react';

import { AppContext } from '../../containers/AppContext';
import PageSpinner from '../PageSpinner/PageSpinner';

const LoadControl = (props) => {
    const { initialLoad } = useContext(AppContext);
    return (
        <React.Fragment>
            {initialLoad ? (
                <PageSpinner />
            ) : props.children}
        </React.Fragment>

    )
}

export default LoadControl;