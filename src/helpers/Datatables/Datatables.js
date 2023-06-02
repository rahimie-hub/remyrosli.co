import React, { useEffect } from 'react'

import { getPaging, getButtons, getLanguage, getDom } from './DatatablesConfig.js';
import PageSpinner from '../PageSpinner/PageSpinner.js';
import '../Datatables/style.css';

import $ from 'jquery';

const Datatables = props => {
    const tableId = props.tableId === undefined ? 'datatable' : props.tableId;
    useEffect(() => {
        // console.log('[Datatables.js] useEffect');
        $('#' + tableId).DataTable({
            data: props.tableData,
            columns: props.tableColumns,
            responsive: true,
            buttons: getButtons(props.dtColumns, props.dtTitle),
            dom: getDom(),
            pagingType: getPaging(),
            language: getLanguage()
        });

        return () => {
            console.log('[Datatables.js] useEffect clean up');
            $('#' + tableId).DataTable().destroy(true);
        }
    }, []);
    return <table className="table-responsive d-block d-xl-table stripe hover cell-border compact order-column" id={tableId}></table>;
}

export default Datatables;


export const DatatablesHTML = props => {
    const tableId = props.tableId === undefined ? 'datatable' : props.tableId;
    const setColVisibility = props.setColVisibility === undefined ? '' : props.setColVisibility === '' ? '' : props.setColVisibility === [] ? '' : props.setColVisibility;

    useEffect(() => {
        // console.log('[DatatablesHTML.js] useEffect');

        $('#' + tableId).DataTable({
            responsive: true,
            buttons: getButtons(props.dtColumns, props.dtTitle),
            dom: getDom(),
            // scrollX: true,
            pagingType: getPaging(),
            language: getLanguage(),
            columnDefs: setColVisibility,
        });

        return () => {
            console.log('[Datatables.js] useEffect clean up');
            $('#' + tableId).DataTable().destroy(true);
        }
    }, []);

    return <div><table className="table-responsive d-block d-xl-table stripe hover cell-border compact order-column" id={tableId}>{props.children}</table></div>;
}

export const DatatablesHTMLLoading = props => {
    useEffect(() => { }, [props.loading]);

    return props.loading ? <PageSpinner /> : <DatatablesHTML {...props}>{props.children}</DatatablesHTML>;
}



export const DatatablesEmpty = props => {
    const tableId = props.tableId === undefined ? 'datatable' : props.tableId;

    useEffect(() => {
        // console.log('[Datatables.js] useEffect');

        $('#' + tableId).DataTable({
            responsive: true,
            language: getLanguage()
        });

        return () => {
            console.log('[Datatables.js] useEffect clean up');
            $('#' + tableId).DataTable().destroy(true);
        }
    }, []);

    return <div><table className="table-responsive d-block d-xl-table stripe hover cell-border compact order-column" id={tableId}>{props.children}</table></div>;
}

export const DatatablesEmptyLoading = props => {
    useEffect(() => { }, [props.loading]);

    return props.loading ? <PageSpinner /> : <DatatablesEmpty {...props}>{props.children}</DatatablesEmpty>;
}

