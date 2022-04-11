import Service from "./Service";

const resource = '/api/v1/iva';

export default {

    get(){
        return Service.get(resource);
    },

}