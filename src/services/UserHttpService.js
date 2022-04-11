import Service from "./Service";

const resource = '/api/v1/user';

export default {

    get(){
        return Service.get(resource);
    },

    create(payload){
        return Service.post(resource, payload);
    },

    me(){
        return Service.get(`${resource}/me`);
    }
}