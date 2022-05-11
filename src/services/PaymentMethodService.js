import Service from "./Service";

const resource = '/api/v1/payment_method';

export default {

    get(){
        return Service.get(resource);
    },

}