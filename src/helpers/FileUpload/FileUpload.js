import React, { useEffect, useContext } from 'react'

import { AppContext } from '../../containers/AppContext';

import $ from 'jquery';

const FileUpload = props => {
    const { userDetail, edocumentServiceKey } = useContext(AppContext);
    const actionBy = userDetail.uid;
    const elementId = props.elementId === undefined ? 'file-input' : props.elementId;

    useEffect(() => {
        const url = '/edocument-service/api/ext/store/upload?actionBy=' + actionBy;
        const $elem = $('#' + elementId);
        const initDataList = props.initData.map((item) => '/edocument-service/api/ext/store/download?actionBy=' + actionBy + '&refId=' + item.storeRefId);
        const initConfigList = props.initData.map((item) => {
            return {
                key: item.fileName,
                caption: item.fileName,
                type: item.type,
                size: item.fileSize,
                url: '/etrustfundservice/attachment/delete/' + item.attachmentId + '?actionBy=' + actionBy,
                downloadUrl: '/edocument-service/api/ext/store/download?actionBy=' + actionBy + '&refId=' + item.storeRefId,
                refId: item.storeRefId
            }
        });

        $elem.fileinput({
            theme: "fas",
            uploadUrl: url,
            ajaxSettings: {
                headers: {
                    'x-skb-module-access': edocumentServiceKey
                }
            },
            uploadAsync: true,
            previewFileType: 'any',
            // maxFileCount: 5,
            // maxFileSize: 25600, //in KB - 25600 KB=(25 MB)
            // maxFilePreviewSize: 25600, //in KB - 25600 KB=(25 MB),
            allowedFileTypes: ['image', 'html', 'text', 'object'],
            // allowedFileExtensions: ['jpg', 'jpeg', 'gif', 'png', 'txt'],
            purifyHtml: true,
            overwriteInitial: false,
            browseOnZoneClick: true,
            initialPreviewAsData: true, // defaults markup
            initialPreviewFileType: 'image', // image is the default and can be overridden in config below
            initialPreview: initDataList,
            initialPreviewConfig: initConfigList,
            // preferIconicPreview: true, // this will force thumbnails to display icons for following file extensions
            previewFileExtSettings: {
                'doc': function (ext) {
                    return ext.match(/(doc|docx)$/i);
                },
                'xls': function (ext) {
                    return ext.match(/(xls|xlsx)$/i);
                },
                'ppt': function (ext) {
                    return ext.match(/(ppt|pptx)$/i);
                },
                'zip': function (ext) {
                    return ext.match(/(zip|rar|7z|tar|gz|gzip)$/i);
                },
                'htm': function (ext) {
                    return ext.match(/(htm|html)$/i);
                },
                'txt': function (ext) {
                    return ext.match(/(txt|ini|csv|java|php|js|css)$/i);
                },
            },
            previewFileIconSettings: {
                'pdf': '<i class="fas fa-file-pdf text-danger"></i>',
                'doc': '<i class="fas fa-file-word text-primary"></i>',
                'xls': '<i class="fas fa-file-excel text-success"></i>',
                'ppt': '<i class="fas fa-file-powerpoint text-danger"></i>',
                'zip': '<i class="fas fa-file-archive text-muted"></i>',
            },
            uploadExtraData: {
                'levelCode': props.levelCode
            },
            browseClass: "btn btn-primary btn-block",
            browseLabel: "Pilih Fail...",
            showUpload: false,
            showRemove: false,
        }).on('change', function (event) {
            // console.log("File changed");
        }).on("filebatchselected", function (event, files) {  // triggered when select/drop files
            $elem.fileinput("upload");
        }).on('fileuploaded', function (event, data, previewId, index) {  // triggered after complete upload
            if (props.onFileUploaded)
                props.onFileUploaded(data, previewId, index);
        }).on('filecleared', function (event) {  // triggered when clear all file clicked
            if (props.onFileCleared)
                props.onFileCleared();
        }).on('filebeforedelete', function (event, key, data) {  // triggered when individual file is deleted for existing file
            if (props.onFileRemove)
                return props.onFileRemove(key);
        }).on('filesuccessremove', function (event, id) {  // triggered when individual file is deleted for new file
            if (props.onFileRemoved)
                props.onFileRemoved(id);
        }).on('fileerror', function (event, data, msg) {
            alert(msg);
        }).on('fileuploaderror', function (event, data, msg) {
            alert(msg);
        });


    }, []);

    return <input id={elementId} type="file" name="document" disabled={props.disabledForm} multiple />
}

export default FileUpload;