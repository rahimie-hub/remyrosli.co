import axios from 'axios';

const baseUrl = 'http://localhost:4242/api/v1/mail';

class MailService {

    /*********************************************************************************
     * MAIL SERVICE *
     *********************************************************************************/
    static postEmail = (id) => axios.post(`${baseUrl}/${id}`);

}

export default MailService;