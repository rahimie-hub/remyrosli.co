import axios from 'axios';

const baseUrl = 'http://localhost:4242/api/v1/resume';

class ResumeService {

    /*********************************************************************************
     * RESUME *
     *********************************************************************************/
    static getListing = () => axios.get(`${baseUrl}`, {});

    static create = (data) => axios.post(`${baseUrl}`, data,{
    });

    static getById = (id) => axios.get(`${baseUrl}/${id}`);

    static delete = (id) => axios.delete(`${baseUrl}/${id}`);

    static update = (id, data) => axios.put(`${baseUrl}/${id}`, data, {
    });

  
}

export default ResumeService;