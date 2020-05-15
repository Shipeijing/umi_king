import request from '../utils/request';
import api from '../utils/api';
export default {
    login(data) {
        const rData = {
            Uid: data.Uid,
            Pwd: data.Pwd
        }
        const req = request(api.login, 'POST', rData);
        return req
    }
}