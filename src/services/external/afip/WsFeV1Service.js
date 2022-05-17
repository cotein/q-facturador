import Service from "./../../Service";

const resource = '/api/v1/afip';

export default {

    ultimo_autorizado(payload){
        return Service.post(`${resource}/ultimo_autorizado`, payload)
    },

    searchPersonAtAFIP(number){
        return Service.post(`${resource}/searchPersonAtAfip`,{number});
    }
}