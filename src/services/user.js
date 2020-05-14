import request from '../utils/request';
import api from '../utils/api';
export default {
    async login(data){
        const rData={
            taskCode:data.code,
            phoneNumber:data.number,
            country:data.country
        }
       const req =await request(api.login, 'POST', rData);
         return req
    }
}