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
            // messageTop: '*Hak milik Perbandaran Klang*',
            // messageBottom: '*Hak milik Perbandaran Klang*'
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
            // messageTop: '*Hak milik Perbandaran Klang*',
            // messageBottom: '*Hak milik Perbandaran Klang*'
        },
        {
            extend: 'print',
            footer: true,
            text: 'Cetak',
            exportOptions: {
                columns: columns,
            },
            title: title,
            // messageTop: '*Hak milik Perbandaran Klang*',
            // messageBottom: '*Hak milik Perbandaran Klang*'
        }
    ];
}

export const getLanguage = () => {
    return {
        "sEmptyTable": "Tiada data",
        "sInfo": "Paparan dari _START_ hingga _END_ dari _TOTAL_ rekod",
        "sInfoEmpty": "Paparan 0 hingga 0 dari 0 rekod",
        "sInfoFiltered": "(Ditapis dari jumlah _MAX_ rekod)",
        "sInfoPostFix": "",
        "sInfoThousands": ",",
        "sLengthMenu": "Papar _MENU_ rekod",
        "sLoadingRecords": "Diproses...",
        "sProcessing": "Sedang diproses...",
        "sSearch": "Carian:",
        "sZeroRecords": "Tiada padanan rekod yang dijumpai.",
        "oPaginate": {
            "sFirst": "Pertama",
            "sPrevious": "Sebelum",
            "sNext": "Kemudian",
            "sLast": "Akhir"
        },
        "oAria": {
            "sSortAscending": ": diaktifkan kepada susunan lajur menaik",
            "sSortDescending": ": diaktifkan kepada susunan lajur menurun"
        },
        'bProcessing': "true"
    }
}