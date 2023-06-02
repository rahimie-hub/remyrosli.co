import React, { useContext } from 'react';
import { AppContext } from '../AppContext';

export default function LoadControl(props) {
    const { initialLoad } = useContext(AppContext);
    return (
        <React.Fragment>
            {initialLoad ? (
                <div className="row">
                    <div className="col-4 offset-4">
                        <div className="card card-loading mt-4">
                            <div className="card-body text-center">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="mt-3">
                                    Sedang Diproses
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : props.children}
        </React.Fragment>
    )
}