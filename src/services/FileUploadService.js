import axios from 'axios';

const baseUrl = 'http://localhost:4242/api/v1/fileupload';

class FileUploadService {

    /*********************************************************************************
     * FILE UPLOAD *
     *********************************************************************************/

    static download = (id) => axios.get(`${baseUrl}/${id}/download`,{
        method: 'get',
        url: `${baseUrl}/${id}/download`,
        responseType: 'blob',
        headers: {}
    });

    static upload = (data) => axios.post(`${baseUrl}`, data,{ });

}

export default FileUploadService;