
export const getPaging = () => {
    return "full_numbers";
}

export const getDom = () => {
    return "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'Bf>>" +
        "<'dropdown-divider p-0 m-0'>" +
        "<'row'<'col-sm-12'tr>>" +
        "<'row'<'col-sm-12 col-md-3'i><'col-sm-12 col-md-9'p>>";
    // return "<'row'<'col-sm-12 col-md-12 pb-3 text-right'B>>" +
    //     "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>>" +
    //     "<'row'<'col-sm-12'tr>>" +
    //     "<'row'<'col-sm-12 col-md-3'i><'col-sm-12 col-md-9'p>>";
}

export const getDomNoPrintButton = () => {
    return "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>>" +
        "<'dropdown-divider p-0 m-0'>" +
        "<'row'<'col-sm-12'tr>>" +
        "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>";
}

export const getButtons = (columns, title) => {
    return [
        {
            extend: 'excelHtml5',
            footer: true,
            exportOptions: {
                columns: columns, // REFER HERE -> https://datatables.net/extensions/buttons/examples/html5/columns.html
            },
            title: title,
            messageTop: '*',
            messageBottom: ''
        },
        {
            extend: 'pdfHtml5',
            footer: true,
            orientation: 'landscape',
            pageSize: 'A4',
            exportOptions: {
                columns: columns,
            },
            title: title,
            messageTop: '',
            messageBottom: '',
        },
        {
            dom: 'Bfrtip',
            extend: 'print',
            footer: true,
            text: 'Cetak',
            exportOptions: {
                columns: columns,
            },
            orientation: 'landscape',
            title: title,
            messageTop: '',
            messageBottom: ''
        },
        // 'colvis'
    ];
}

export const getLanguage = () => {
    return {
        "sEmptyTable": "No Data",
        "sInfo": " _START_ to _END_ from _TOTAL_ record",
        "sInfoEmpty": "",
        "sInfoFiltered": "(Filter from total _MAX_ record)",
        "sInfoPostFix": "",
        "sInfoThousands": ",",
        "sLengthMenu": "_MENU_ record",
        "sLoadingRecords": "Processing...",
        "sProcessing": "",
        "sSearch": "Search:",
        "sZeroRecords": "No record found",
        "oPaginate": {
            "sFirst": "",
            "sPrevious": "",
            "sNext": "",
            "sLast": ""
        },
        "oAria": {
            "sSortAscending": ":",
            "sSortDescending": ":"
        },
        'bProcessing': "true"
    }
}